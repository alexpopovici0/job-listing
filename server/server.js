const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);
