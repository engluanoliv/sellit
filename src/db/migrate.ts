import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./connection";

migrate(db, { migrationsFolder: "drizzle" });
