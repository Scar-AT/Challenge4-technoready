import { connectDB } from "./connectDB.js";

(async () => {
  const { db, client } = await connectDB("tattler");
  if (db) {
    console.log(`✅ Connection test successful. Database name: ${db.databaseName}`);
  } else {
    console.log("❌ Database connection failed.");
  }
  await client.close();
})();
