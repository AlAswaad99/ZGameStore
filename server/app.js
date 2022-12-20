const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
// const serverless = require('serverless-http');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const authRouter = require("./authController");
const libraryRouter = require("./libraryController");
app.use("/auth", authRouter);
app.use("/add", libraryRouter);

// app.use('/.netlify/functions/app', authRouter);
// app.use('/.netlify/functions/app', libraryRouter);

module.exports = app;
// module.exports.handler = serverless(app);