const express = require("express");
const router = express.Router();
const cinemaController = require("../controllers/cinemaController");
const verifyJWT = require("../middleware/verifyJWT");
router
  .route("/")
  .get(cinemaController.getAllCinemas)
  .post(cinemaController.createNewCinema);

router
  .route("/:id")
  .get(cinemaController.getOneCinemas)
  .patch(cinemaController.updateCinema)
  .delete(cinemaController.deleteCinema);

module.exports = router;
