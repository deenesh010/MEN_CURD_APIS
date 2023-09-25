const express = require("express");
const User = require("../models/adminModel");

exports.createData = async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await User.findOne({ email: email, password: password });

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
  const { name, email, password } = req.body;
  const data = {
    name: name,
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

exports.updateOneData = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await user.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: `cannot find the user ${id}` });
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.readOneData = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.readUserDate = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};
