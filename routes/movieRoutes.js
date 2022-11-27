const express = require("express");
const router = express.Router();
const movieController = require("../controllers/moviesController");

router
  .route("/")
  .get(movieController.getAllMovies)
  .post(movieController.createNewMovie)
  .patch(movieController.updateMovie);
router
  .route("/:id")
  .get(movieController.getOneMovies)
  .delete(movieController.deleteMovie);

module.exports = router;
