const express = require("express");
const router = express.Router();
const ShowtimeController = require("../controllers/showtimeController");
const verifyJWT = require("../middleware/verifyJWT");
router.route("/").post(ShowtimeController.createNewShowtime);

router
  .route("/:movieId/:provinceId/:date")
  .get(ShowtimeController.getShowtimesByProvince)
  .delete(ShowtimeController.deleteShowtime);

module.exports = router;
