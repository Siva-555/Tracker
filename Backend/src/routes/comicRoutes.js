const { Router } = require("express");
const multer = require("multer");
const path = require("node:path");

const {
  createComic,
  getAllComics,
  updateComic,
  deleteComic,
} = require("../controllers/comicController");

// const comicModel = require("../model/comicModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.post("/", upload.single("image"), createComic);

router.get("/getAllComics", getAllComics);

router.put("/:id", upload.single("image"), updateComic);

router.delete("/:id", deleteComic);

module.exports = router;
