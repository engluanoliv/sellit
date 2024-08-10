import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const databaseUrl = process.env.DB_URL;
if (!databaseUrl) {
  throw new Error("DB_URL is not defined.s");
}

const client = postgres(databaseUrl);
export const db = drizzle(client);
