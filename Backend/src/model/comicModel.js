const mongoose = require("mongoose");
const { Schema } = mongoose;

const comicSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    status: { type: String, required: true },
    chapters: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const comicModel = mongoose.model("comic", comicSchema);

module.exports = comicModel;
