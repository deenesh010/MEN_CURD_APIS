const express = require("express");
const mongoose = require("mongoose");
const products = require("./routes/products");
const user = require("./routes/user");
const cart =require("./routes/cart")
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", products);
app.use("/user", user);
app.use("/cart",cart);


app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(
    "mongodb+srv://deenesh010:Sindhuli5588@cluster0.zce4ovn.mongodb.net/crud?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
