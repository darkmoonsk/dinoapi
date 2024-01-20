import mongoose from "mongoose";

const dinosaurSchema = new mongoose.Schema({
  name: String,
  weight: String,
  height: String,
  length: String,
  diet: String,
  period: String,
  existed: String,
  region: String,
  type: { type: String, enum: ["terrestrial", "flying", "aquatic"] },
  description: String,
  image: String,
  isPopular: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Dinosaur = mongoose.model("Dinosaur", dinosaurSchema);

export default Dinosaur;
