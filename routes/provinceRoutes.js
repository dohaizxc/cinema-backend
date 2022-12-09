const express = require("express");
const router = express.Router();
const provinceController = require("../controllers/provinceController");
const verifyJWT = require("../middleware/verifyJWT");
router
  .route("/")
  .get(provinceController.getAllProvinces)
  .post(provinceController.createNewProvince);

router
  .route("/:id")
  .get(provinceController.getOneProvinces)
  .patch(provinceController.updateProvince)
  .delete(provinceController.deleteProvince);

module.exports = router;
