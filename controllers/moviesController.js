const Movie = require("../models/Movie");
const asyncHandler = require("express-async-handler");

const getAllMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();
  if (!movies) return res.status(400).json({ message: "No movies found" });

  res.json(movies);
});

const createNewMovie = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    director,
    actors,
    genre,
    releaseDate,
    duration,
    language,
  } = req.body;
  if (!name || !image || !duration)
    return res
      .status(400)
      .json({ message: "name, image,duration are required!" });
  const movie = await Movie.create({
    name: name,
    image: image,
    director: director,
    actors: actors,
    genre: genre,
    releaseDate: releaseDate,
    duration: duration,
    language: language,
  });
  if (movie) {
    res.status(201).json({ message: `New movie ${name} created` });
  } else {
    res.status(400).json({ message: "invalid movie received" });
  }
});

const updateMovie = asyncHandler(async (req, res) => {
  const {
    id,
    name,
    image,
    director,
    actors,
    genre,
    releaseDate,
    duration,
    language,
  } = req.body;
  if (!id || !name || !image || !duration)
    return res
      .status(400)
      .json({ message: "id, name, image,duration are required!" });

  const movie = await Movie.findById(id).exec();
  if (!movie) return res.status(400).json({ message: "Movie not found" });

  movie.name = name;
  movie.image = image;
  movie.duration = duration;
  await movie.save();
  res.json({ message: `${name} updated` });
});

const deleteMovie = asyncHandler(async (req, res) => {});

module.exports = {
  getAllMovies,
  createNewMovie,
  updateMovie,
  deleteMovie,
};
