const express = require("express");
const router = express.Router();
const newsOfferController = require("../controllers/newsOfferController");
router.route("/news").get(newsOfferController.getNews);
router.route("/offer").get(newsOfferController.getOffers);

module.exports = router;
