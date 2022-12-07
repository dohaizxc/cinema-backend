const express = require("express");
const router = express.Router();
const ShowtimeController = require("../controllers/ShowtimeController");
const verifyJWT = require("../middleware/verifyJWT");
router
  .route("/")
  .get(ShowtimeController.getAllShowtimes)
  .post(ShowtimeController.createNewShowtime);

router
  .route("/:id")
  .get(ShowtimeController.getOneShowtimes)
  .delete(ShowtimeController.deleteShowtime);

module.exports = router;
