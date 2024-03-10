const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then((res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error in db connection");
  });
