const express = require("express");
let router = express.Router();
const adminController = require("../controller/admin");

router.route("/").post(adminController.createData);
//   .get(adminController.readUserDate);
// router.route("/create").post(adminController.createUser);

// router
//   .route("/:id")
//   .get(adminController.readOneData)
//   .patch(adminController.updateOneData);

module.exports = router;
