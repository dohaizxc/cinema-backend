const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT");
router.route("/").get(verifyJWT, userController.getAllUsers);

router
  .route("/:id")
  .get(verifyJWT, userController.getOneUser)
  .patch(verifyJWT, userController.updateUser)
  .delete(verifyJWT, userController.deleteUser);

module.exports = router;
