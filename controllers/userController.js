const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const register = asyncHandler(async (req, res) => {
  const { email, password, phoneNumber, name } = req.body;
  if (!email || !password || !phoneNumber || !name)
    return res
      .status(400)
      .json("email, password, phoneNumber,name are required!");

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email: email,
    password: hashPassword,
    phoneNumber: phoneNumber,
    name: name,
  });

  if (user) {
    res.status(201).json({ message: `${email} register successfully` });
  } else {
    res.status(400);
  }
});

module.exports = {
  register,
};
