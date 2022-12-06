const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");
const verifyJWT = require("../middleware/verifyJWT");
router
  .route("/")
  .get(roomController.getAllRooms)
  .post(roomController.createNewRoom);

router
  .route("/:id")
  .get(roomController.getOneRooms)
  .patch(roomController.updateRoom)
  .delete(roomController.deleteRoom);

module.exports = router;
