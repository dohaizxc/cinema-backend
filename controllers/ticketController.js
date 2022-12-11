const asyncHandler = require("express-async-handler");
const Ticket = require("../models/Ticket");
const Showtime = require("../models/Showtime");
const Cinema = require("../models/Cinema");
const User = require("../models/User");
const { seats, foodItems } = require("../config/configData");

const createTicket = asyncHandler(async (req, res) => {
  const { showtime, user, seat, foods, paymentMethod } = req.body;
  if (!showtime || !user || !seat)
    return res
      .status(400)
      .json({ message: "Showtime, user, seat are required!" });

  const showtimeFound = await Showtime.findById(showtime)
    .populate("roomId")
    .populate("movieId")
    .populate("roomId");
  const userFound = await User.findById(user).exec();

  if (!showtimeFound || !userFound)
    return res
      .status(400)
      .json({ message: "showtime, showtime are not correct" });
  const cinema = await Cinema.findById(showtimeFound.roomId.cinema);
  for (oneSeat of seat) {
    if (showtimeFound.seats.indexOf(oneSeat) !== -1)
      return res.status(400).json({ message: `Ghế  bạn chọn đã có người đặt` });
  }
  const pickingSeat = seats.filter((seatItem) => seat.includes(seatItem.id));
  const pickingSeatCode = pickingSeat?.map((seat) => seat.code);
  const date = new Date(showtimeFound.date);
  const formatDate =
    "ngày " +
    date.getDate() +
    " tháng " +
    (date.getMonth() + 1) +
    " năm " +
    date.getFullYear();

  const newFoods = foods.map((food) => {
    const newFood = foodItems.filter((foodItem) => food.id === foodItem.id)[0];
    newFood.quantity = food.quantity;
    return newFood;
  });

  const totalFood = newFoods.reduce((a, b) => a + b.price * b.quantity, 0);
  const totalTicket = pickingSeat.reduce((a, b) => a + b.price, 0);
  const ticket = await Ticket.create({
    Showtime: showtime,
    user: user,
    seat: pickingSeatCode.join(", "),
    foods: foods ? newFoods : [],

    movieName: showtimeFound.movieId.name,
    cinemaName: cinema.name,
    movieImage: showtimeFound.movieId.image,
    room: showtimeFound.roomId.name,

    time:
      showtimeFound.time +
      " - " +
      showtimeFound.time_end +
      " ~ " +
      showtimeFound.movieId.duration +
      " phút",
    date: formatDate,
    totalTicket: totalTicket,
    totalFood: totalFood,
    paymentMethod: paymentMethod,
    id: Date.now(),
  });

  if (ticket) {
    showtimeFound.tickets.push(ticket);
    console.log(seat);
    if (!showtimeFound.seats) {
      showtimeFound.seats = [...seat];
    } else showtimeFound.seats = [...showtimeFound.seats, ...seat];
    await showtimeFound.save();
    userFound.tickets.push(ticket);
    await userFound.save();

    res.status(201).json({ ticket });
  } else {
    res.status(400).json({ message: "invalid showtime received" });
  }
});

const getOneTicket = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const ticket = await Ticket.findById(id);
  if (!ticket) return res.status(400).json({ message: "No ticket found" });

  res.json(ticket);
});

module.exports = {
  createTicket,
  getOneTicket,
};
