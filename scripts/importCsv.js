// scripts/importCsv.js
import { execSync } from "child_process";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const dbName = process.env.DB_NAME || "ch4-nao";

const root = path.resolve();
const dataDir = path.join(root, "data");

const imports = [
  { name: "restaurants", file: path.join(dataDir, "restaurants.csv") },
  { name: "users", file: path.join(dataDir, "users.csv") },
];

try {
  for (const { name, file } of imports) {
    console.log(`\n📦 Importing ${name}...`);
    const command = `mongoimport --db ${dbName} --collection ${name} --type csv --headerline --file "${file}"`;
    execSync(command, { stdio: "inherit" });
  }
  console.log("\n✅ Data import completed successfully!");
} catch (error) {
  console.error("❌ Error importing data:");
  console.error(error.message);
  process.exit(1);
}
