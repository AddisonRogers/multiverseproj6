import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import {migrate} from "drizzle-orm/bun-sqlite/migrator";

const sqlite = new Database(":memory:");
const db = drizzle(sqlite);

migrate(db, {migrationsFolder: "./tables"});

export default db;