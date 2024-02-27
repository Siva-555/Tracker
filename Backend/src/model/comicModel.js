import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const comicSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  status: { type: String, required: true },
  chapters: { type: Decimal128, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now(), immutable: true },
  updatedAt: { type: Date, default: Date.now() },
});

const comicModel = mongoose.model("comic", comicSchema);

module.exports = comicModel;
