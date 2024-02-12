const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json("Email already exists");
    }

    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
      return res.status(401).json("wrong credentials!");
    }
    if (user.password !== req.body.password) {
      return res.status(401).json("wrong credential!");
    }
    const { password, ...other } = user._doc;

    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      "jwtKey",
      { expiresIn: "3d" }
    );

    return res.status(200).json({ ...other, accessToken });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
