const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  islogged: Boolean,
});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;
