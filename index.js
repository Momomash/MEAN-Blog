const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const dbConfig = require("./config/db");

const accountRoutes = require("./routes/account");

const app = express();

const PORT = 3000;

// подрубаем CORS-ы
app.use(cors());
// подрубаем bodyParser для парсинга тел запросов в json
app.use(bodyParser.json());

mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Successful connection to the database");
});
mongoose.connection.on("error", (err) => {
  console.log("Not successful connection to the database" + err);
});

app.listen(PORT, () => {
  console.log("The server was runningg on the port:" + PORT);
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/account", accountRoutes);
