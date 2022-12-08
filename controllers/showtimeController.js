const Showtime = require("../models/Showtime");
const Movie = require("../models/Movie");
const Room = require("../models/Room");
const asyncHandler = require("express-async-handler");
const Cinema = require("../models/Cinema");

const getAllShowtimes = asyncHandler(async (req, res) => {
  const { date, cinemaId, movieId } = req.body;

  if (!date && !cinemaId && !movieId) {
    const showtimes = await Showtime.find();
    if (!showtimes)
      return res.status(400).json({ message: "No Showtimes found" });
    showtimes.sort(function (a, b) {
      const aHour = Number(a.time?.split(":")[0]);
      const bHour = Number(b.time?.split(":")[0]);
      if (aHour == bHour)
        return Number(a.time?.split(":")[1]) - Number(b.time?.split(":")[1]);
      return aHour - bHour;
    });

    res.json(showtimes);
  } else {
    const filter = {
      $and: [],
    };
    if (date) {
      let currentDate = new Date(date);
      let nextDate = new Date(date);
      filter.$and.push({
        date: {
          $gte: date,
          $lt: nextDate.setDate(currentDate.getDate() + 1),
        },
      });
    }

    if (cinemaId) {
      const cinema = await Cinema.findById(cinemaId);
      filter.$and.push({ roomId: { $in: cinema.rooms } });
    }

    const showtimes = await Showtime.find(filter);
    if (!showtimes)
      return res.status(400).json({ message: "No Showtimes found" });
    showtimes.sort(function (a, b) {
      const aHour = a.time?.split(":")[0];
      const bHour = b.time?.split(":")[0];
      if (aHour == bHour) return a.time?.split(":")[1] - b.time?.split(":")[1];
      return aHour - bHour;
    });
    res.json(showtimes);
  }
});
const getOneShowtimes = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const showtime = await Showtime.findById(id)
    .populate("movieId")
    .populate("roomId");
  if (!showtime) return res.status(400).json({ message: "No Showtimes found" });

  res.json(showtime);
});

const createNewShowtime = asyncHandler(async (req, res) => {
  const { date, roomId, movieId, time } = req.body;
  if (!date || !roomId || !movieId || !time)
    return res
      .status(400)
      .json({ message: "date, roomId, movieId are required!" });

  const room = await Room.findById(roomId).exec();
  const movie = await Movie.findById(movieId).exec();

  if (!room || !movie)
    return res.status(400).json({ message: "movie, room are not correct" });

  const totalMinute =
    Number(time.split(":")[0]) * 60 + Number(time.split(":")[1]);
  const hour_end = Math.floor((movie.duration + totalMinute) / 60);
  const minute_end = (movie.duration + totalMinute) % 60;
  console.log(hour_end, totalMinute);
  const time_end = hour_end + ":" + minute_end;
  const showtime = await Showtime.create({
    date: date,
    roomId: roomId,
    movieId: movieId,
    time: time,
    time_end: time_end,
  });

  if (showtime) {
    room.Showtimes.push(showtime);
    await room.save();
    res.status(201).json({ message: `New showtine created` });
  } else {
    res.status(400).json({ message: "invalid showtime received" });
  }
});

const deleteShowtime = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json("Showtime id is required!");
  const showtime = await Showtime.findById(id).exec();
  if (!showtime) return res.status(400).json({ message: "Showtime not found" });
  const room = await Room.findById(showtime.roomId).exec();
  room.Showtimes.filter((item) => item !== id);
  await room.save();
  await showtime.deleteOne();

  res.json(`Showtiem is deleted!`);
});

module.exports = {
  getAllShowtimes,
  getOneShowtimes,
  createNewShowtime,
  deleteShowtime,
};
