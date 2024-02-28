const { Router } = require("express");

const {
  createComic,
  getAllComics,
  updateComic,
  deleteComic,
} = require("../controllers/comicController");

// const comicModel = require("../model/comicModel");

const router = Router();

router.post("/", createComic);

router.get("/getAllComics", getAllComics);

router.put("/:id", updateComic);

router.delete("/:id", deleteComic);

module.exports = router;
