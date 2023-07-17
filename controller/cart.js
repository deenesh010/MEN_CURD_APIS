const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

// exports.readOneData = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.createData = async (req, res) => {
  try {
    const cartItem = await Cart.create(req.body);
    res.status(200).json(cartItem);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.readCartData = async (req, res) => {
  try {
    const cartItems = await Cart.find({});
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteOneData = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByIdAndDelete(id);
    if (!cart) {
      return res.status(404).json({ message: `Cannot find product ${id}` });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
