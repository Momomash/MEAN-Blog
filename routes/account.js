const express = require('express');
const router = express.Router();

router.get("/reg", (req, res) => {
  res.send("Registration Page");
});

router.get("/auth", (req, res) => {
  res.send("Login Page");
});

router.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

module.exports = router;
