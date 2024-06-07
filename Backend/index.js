require("dotenv").config();
require("./src/database/config");

var cors = require("cors");
const express = require("express");

const comicRoutes = require("./src/routes/comicRoutes");

const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

app.use(cors());
app.use(express.json());

/* 
  This will create uploads folder static, so that we get image data from localhost url - 
  http://localhost:5000/api/uploads/image-1709485407453.jpg 

*/
app.use("/api/uploads", express.static("uploads"));

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/comics/", comicRoutes);

app.listen(PORT, () =>
  console.log(`Tracker backend listening on PORT - ${PORT}!`)
);
