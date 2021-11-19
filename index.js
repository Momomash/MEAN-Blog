const express = require("express");
// eslint-disable-next-line no-unused-vars
const cors = require("cors");
// eslint-disable-next-line no-unused-vars
const bodyParser = require("body-parser");
// eslint-disable-next-line no-unused-vars
const mongoose = require("mongoose");
// eslint-disable-next-line no-unused-vars
const passport = require("passport");
// eslint-disable-next-line no-unused-vars
const path = require("path");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Сервер был запущен на порту" + PORT);
});

app.get("/", (req, res) => {
  res.send("Главная страница сайта")
});
