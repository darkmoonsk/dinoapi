import "dotenv/config";
import express, { Application } from "express";
import { PORT } from "./constants";
import { connectDB } from "./config/database";
import handleShutdown from "./utils/handleShutdown";
import cors from "cors";

import dinosaurRoutes from "./routes/dinosaurRoutes";

export const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB().then(() => {
   app.use("/", express.static("public/build/"));
   app.use("/api/dinosaurs", dinosaurRoutes);

   app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
   });

});

process.on('SIGINT', handleShutdown);
process.on('uncaughtException', handleShutdown);
process.on('unhandledRejection', handleShutdown);
process.on('beforeExit', handleShutdown);
