import "dotenv/config";

import app from "./app";
import { PORT } from "./constants";
import { connectDB } from "./config/database";
import handleShutdown from "./utils/handleShutdown";

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});

process.on("SIGINT", handleShutdown);
process.on("uncaughtException", handleShutdown);
process.on("unhandledRejection", handleShutdown);
process.on("beforeExit", handleShutdown);


