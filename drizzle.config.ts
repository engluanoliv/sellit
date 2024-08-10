import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

const databaseUrl = process.env.DB_URL!;
const config: Config = {
  schema: "./src/db/schema/index.ts",
  out: "./drizzleee",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
};

export default config;
console.log("Database URL:", process.env.DB_URL);
