require("dotenv").config();
require("./src/database/config");

const express = require("express");

const comicRoutes = require("./src/routes/comicRoutes");

const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/comics/", comicRoutes);

app.listen(port, () =>
  console.log(`Tracker backend listening on port ${port}!`)
);
