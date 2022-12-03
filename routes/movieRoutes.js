const express = require("express");
const router = express.Router();
const movieController = require("../controllers/moviesController");
const verifyJWT = require("../middleware/verifyJWT");
router
  .route("/")
  .get(movieController.getAllMovies)
  .post(movieController.createNewMovie);

router
  .route("/:id")
  .get(movieController.getOneMovies)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
