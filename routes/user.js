const express = require("express");
let router = express.Router();
const userController = require("../controller/user");

router
  .route("/")
  .post(userController.createData)
  .get(userController.readUserDate);
router.route("/signup").post(userController.createUser);

router
  .route("/:id")
  .get(userController.readOneData)
  .patch(userController.updateOneData);

module.exports = router;
