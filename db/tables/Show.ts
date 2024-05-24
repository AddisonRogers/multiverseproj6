import {integer, real, sqliteTable, text} from "drizzle-orm/sqlite-core";

const shows = sqliteTable('shows', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    genre: text('genre'),
    rating: real('rating'),
    available: integer('available', {mode: "boolean"}),
});

export default shows;