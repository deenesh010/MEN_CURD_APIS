const express = require("express");
const User = require("../models/userModel");

exports.createData = async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
};

exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await User.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
};
