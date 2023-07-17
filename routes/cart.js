const express = require("express");
let router = express.Router();
const cartController = require("../controller/cart");

// router.route("/:id").get(cartController.readOneData);
router.route("/:id").delete(cartController.deleteOneData);

router
  .route("/")
  .post(cartController.createData)
  .get(cartController.readCartData);

module.exports = router;
