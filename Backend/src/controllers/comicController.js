const fs = require("node:fs");

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
    const comicData = await comicModel.findById(req.params.id);

    const apiResponse = await comicModel.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        imageUrl: req.file?.filename,
      },
      { new: true } // if true - returns the updated document
    );

    /**
     * To delete the previous image file
     */
    if (req.file?.filename) {
      let fileName = comicData.imageUrl;

      fs.unlink(`uploads/${fileName}`, (err) => {
        if (!err) {
          console.log("successfully deleted");
        }
        console.log(err);
      });
    }

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
      let fileName = apiResponse.imageUrl;

      fs.unlink(`uploads/${fileName}`, (err) => {
        if (!err) {
          console.log("successfully deleted");
        }
        console.log(err);
      });

      res.status(200).json(apiResponse);
    } else {
      res.status(404).json({ message: "data not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = {
  createComic,
  getAllComics,
  updateComic,
  deleteComic,
};
