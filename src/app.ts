import express, { Application } from "express";
import cors from "cors";
// imported routes
import dinosaurRoutes from "./routes/dinosaurRoutes";


const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", express.static("public/build/"));
app.use("/api/dinosaurs", dinosaurRoutes);

export default app;