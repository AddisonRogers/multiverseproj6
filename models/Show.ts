// import our db, Model, DataTypes
import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const Shows = sqliteTable('shows', {
  title: text('title'),
  genre: text('genre'),
  rating: integer('rating'),
  available: integer('available', { mode: 'boolean'}),
  });