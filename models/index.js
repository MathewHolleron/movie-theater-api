const { Show } = require('./Show')
const { User } = require('./User')
const showsData = require('../shows.json')


async function main() {
    await Sequelize.sync();

    await Show.bulkCreate('../Shows.json')
}
main()
Show.belongsTo(User)
User.hasMany(Show)

module.exports = {Show, User}
