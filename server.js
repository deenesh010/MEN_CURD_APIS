const express = require("express");
const mongoose = require("mongoose");
const products = require("./routes/products");

const app = express();

app.use(express.json());
app.use("/products", products);

app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(
    "mongodb+srv://deenesh010:Sindhuli5588@cluster0.zce4ovn.mongodb.net/crud?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
