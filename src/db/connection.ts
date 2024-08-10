import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const databaseUrl = process.env.DB_URL;
if (!databaseUrl) {
  throw new Error("DB_URL is not defined.s");
}

const client = postgres(databaseUrl);
export const db = drizzle(client);

const migrationClient = postgres(databaseUrl, { max: 1 });
migrate(drizzle(migrationClient), { migrationsFolder: "drizzle" })
  .then(() => {
    console.log("Migrations applied successfully");
  })
  .catch((error) => {
    console.log("Error applying migrations: ", error);
  });
