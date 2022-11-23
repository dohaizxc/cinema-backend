const express = require("express");
const router = express.Router();
const movieController = require("../controllers/moviesController");

router
  .route("/")
  .get(movieController.getAllMovies)
  .post(movieController.createNewMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
