import "dotenv/config";
import express, { Request, Response } from "express";
import { PORT } from "./constants";
import connectToDatabase from "./config/database";
import cors from "cors";

import dinosaurRoutes from "./routes/dinosaurRoutes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectToDatabase();

app.use("/api/dinosaurs", dinosaurRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
