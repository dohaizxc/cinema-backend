const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const register = asyncHandler(async (req, res) => {
  const { email, password, phoneNumber, dayOfBirth, gender, name } = req.body;
  if (!email || !password || !phoneNumber || !dayOfBirth || !gender || !name)
    return res
      .status(400)
      .json(
        "email, password, phoneNumber,dayOfBirth,gender,name are required!"
      );

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email: email,
    password: hashPassword,
    phoneNumber: phoneNumber,
    dayOfBirth: dayOfBirth,
    gender: gender,
    name: name,
  });

  if (user) {
    res.status(201).json({ message: `${email} created` });
  } else {
    res.status(400);
  }
});

module.exports = {
  register,
};
