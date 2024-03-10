const comicModel = require("../model/comicModel");

const createComic = async (req, res) => {
  try {
    const comic = new comicModel({
      ...req.body,
      imageUrl: req.file?.filename,
    });
    const apiResponse = await comic.save();
    res.status(201).json(apiResponse);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const getAllComics = async (req, res) => {
  try {
    const apiResponse = await comicModel.find();

    res.status(200).json(apiResponse);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateComic = async (req, res) => {
  try {
    const apiResponse = await comicModel.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        imageUrl: req.file?.filename,
      },
      { new: true } // if true - returns the updated document
    );
    if (apiResponse) {
      res.status(200).json(apiResponse);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteComic = async (req, res) => {
  try {
    const apiResponse = await comicModel.findByIdAndDelete(req.params.id);
    // console.log("delete", apiResponse);
    if (apiResponse) {
      res.status(200).json(apiResponse);
    } else {
      res.status(404).json({ message: "data not found" });
    }
  } catch (err) {
    if (err.name == "MongoServerError") {
      res.status(500).json({ message: err });
    } else {
      res.status(400).json({ message: err });
    }
  }
};

module.exports = {
  createComic,
  getAllComics,
  updateComic,
  deleteComic,
};
