import Shows from "./Show.ts";
import Users from "./User.ts";

Show.belongsToMany(User, { through: 'watched' })
User.belongsToMany(Show, { through: 'watched' })

module.exports = {
  Show,
  User
}