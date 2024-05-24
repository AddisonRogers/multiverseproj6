import {text, sqliteTable, integer} from "drizzle-orm/sqlite-core";

const users = sqliteTable('users', {
    id: integer('id').unique().notNull().primaryKey({ autoIncrement: true }),
    username: text('username').unique().notNull(),
    password: text('password').notNull(),
});

export default users;