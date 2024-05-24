import {integer, primaryKey, sqliteTable, text,} from "drizzle-orm/sqlite-core";
import User from "./User.ts";
import Show from "./Show.ts";

const Watched = sqliteTable('Watched', {
    userId: integer('user_id').references(() => User.id),
    showId: integer('show_id').references(() => Show.id),
    //watchedDate: text('watched_date'),
}, (table) => {
    return {
    pk: primaryKey({ columns: [table.userId, table.showId] }),
    }
});

export default Watched