const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timesStamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
