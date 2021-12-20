const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/reg", (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    login: req.body.login,
    password: req.body.password,
  });
  User.addUser(newUser, (err) => {
    err
      ? res.json({ success: false, message: "User has not been added." })
      : res.json({ success: false, message: "User has been added." });
  });
});

router.get("/auth", (req, res) => {
  res.send("Login Page");
});

router.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

module.exports = router;
