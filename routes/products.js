const express = require("express");
let router = express.Router();
const productController = require("../controller/products");

router
  .route("/")
  .get(productController.readAllData)
  .post(productController.createData);

router
  .route("/:id")
  .get(productController.readOneData)
  .put(productController.updateOneData)
  .delete(productController.deleteOneData);

module.exports = router;
