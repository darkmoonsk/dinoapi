import mongoose from "mongoose";

export interface IDinosaur {
  name: string;
  weight: string;
  height: string;
  length: string;
  diet: string;
  period: string;
  existed: string;
  region: string;
  type: "terrestrial" | "flying" | "aquatic";
  description: string;
  image: string;
  isPopular: boolean;
  createdAt?: Date;
  updatedAt?: Date;
 }

const dinosaurSchema = new mongoose.Schema<IDinosaur>({
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
