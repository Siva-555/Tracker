const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/trackerdb")
  .then((res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error in db connection");
  });
