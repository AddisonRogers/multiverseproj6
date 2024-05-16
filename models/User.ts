import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {relations} from "drizzle-orm";

export const Users = sqliteTable('users', {
  id: integer('user_id').primaryKey(),
  username: text('username'),
  password: text('password'),
});

export const UsersRelations = relations(Users, ({ one }) => ({
  invitee: one(Users, {
    fields: [Users.invitedBy],
    references: [Users.id],
  }),
}));