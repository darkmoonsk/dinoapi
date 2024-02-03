import { disconnectDB } from "../config/database";

export default async function handleShutdown(signal: string) {
    console.log(`Received ${signal}. Disconnecting from the database...`);
    await disconnectDB();
    console.log('Database connection closed.');
    process.exit(0);
}