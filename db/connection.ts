import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database(':memory:');
const db = drizzle(sqlite);

module.exports = {db}