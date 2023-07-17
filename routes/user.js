const express = require("express");
let router = express.Router();
const userController = require("../controller/user");

router.route("/").post(userController.createData);
router.route("/signup").post(userController.createUser);

module.exports = router;
