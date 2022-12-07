const Showtime = require("../models/Showtime");
const Movie = require("../models/Movie");
const Room = require("../models/Room");
const asyncHandler = require("express-async-handler");

const getAllShowtimes = asyncHandler(async (req, res) => {
  const { date, roomId, movieId } = req.body;
  if (!date || !roomId || !movieId)
    return res
      .status(400)
      .json({ message: "date, roomId, movieId are required!" });

  let nextDate = new Date(date);

  const showtimes = Showtime.find({
    $and: [
      {
        releaseDate: {
          $gte: date,
          $lt: nextDate.setDate(date.getDate() + 1),
        },
      },

      { room: { $eq: roomId } },
    ],
  });
  if (!showtimes)
    return res.status(400).json({ message: "No Showtimes found" });

  res.json(showtimes);
});
const getOneShowtimes = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const showtime = await Showtime.findById(id).exec();
  if (!showtime) return res.status(400).json({ message: "No Showtimes found" });

  res.json(showtime);
});

const createNewShowtime = asyncHandler(async (req, res) => {
  const { date, roomId, movieId } = req.body;
  if (!date || !roomId || !movieId)
    return res
      .status(400)
      .json({ message: "date, roomId, movieId are required!" });

  const room = await Room.findById(roomId).exec();
  const movie = await Movie.findById(movieId).exec();

  if (!room || !movie)
    return res.status(400).json({ message: "movie, room are not correct" });
});

const deleteShowtime = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json("Showtime id is required!");
  const Showtime = await Showtime.findById(id).exec();
  if (!Showtime) return res.status(400).json({ message: "Showtime not found" });
  const result = Showtime.deleteOne();

  res.json(`${result.name} is deleted!`);
});

module.exports = {
  getAllShowtimes,
  getOneShowtimes,
  createNewShowtime,
  deleteShowTime,
};
