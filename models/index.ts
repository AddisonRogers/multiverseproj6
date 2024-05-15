const Show = require('./Show.ts')
const User = require('./User.ts')

Show.belongsToMany(User, { through: 'watched' })
User.belongsToMany(Show, { through: 'watched' })

module.exports = {
  Show,
  User
}