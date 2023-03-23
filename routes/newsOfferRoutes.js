const express = require("express");
const router = express.Router();
const newsOfferController = require("../controllers/newsOfferController");
router.route("/news").get(newsOfferController.getNews);
router.route("/offer").get(newsOfferController.getOffers);
router.route("/news/:id").get(newsOfferController.getNewsDetail);
router.route("/offer/:id").get(newsOfferController.getOfferDetail);

module.exports = router;
