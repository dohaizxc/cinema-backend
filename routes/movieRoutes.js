const express = require("express");
const router = express.Router();
const movieController = require("../controllers/moviesController");
const verifyJWT = require("../middleware/verifyJWT");
router
  .route("/")
  .get(movieController.getAllMovies)
  .post(verifyJWT, movieController.createNewMovie)
  .patch(verifyJWT, movieController.updateMovie);
router
  .route("/:id")
  .get(movieController.getOneMovies)
  .delete(verifyJWT, movieController.deleteMovie);

module.exports = router;
