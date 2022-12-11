const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");
const verifyJWT = require("../middleware/verifyJWT");
router.route("/").post(verifyJWT, ticketController.createTicket);

router.route("/:id").get(verifyJWT, ticketController.getOneTicket);
router.route("/user/:id").get(verifyJWT, ticketController.getTicketByUser);

module.exports = router;
