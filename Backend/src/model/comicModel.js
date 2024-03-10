const mongoose = require("mongoose");
const { Schema } = mongoose;

const comicSchema = new Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, default: null },
    category: { type: String, required: true },
    rating: { type: Number, default: -1 },
    status: { type: String, default: "" },
    chapters: { type: Number, required: true },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

const comicModel = mongoose.model("comic", comicSchema);

module.exports = comicModel;
