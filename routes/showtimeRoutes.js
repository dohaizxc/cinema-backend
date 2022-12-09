const express = require("express");
const router = express.Router();
const ShowtimeController = require("../controllers/showtimeController");
const verifyJWT = require("../middleware/verifyJWT");
router.route("/").post(ShowtimeController.createNewShowtime);

router;
router
  .route("/:id")

  .delete(ShowtimeController.deleteShowtime);

router
  .route("/cinema/:cinemaId/:date")
  .get(ShowtimeController.getShowtimeByCinema);
router
  .route("/:movieId/:provinceId/:date")
  .get(ShowtimeController.getShowtimesByProvince);

module.exports = router;
