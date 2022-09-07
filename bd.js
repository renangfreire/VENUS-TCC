const Sequelize = require('sequelize');
const sequelize = new Sequelize('Bd','root','admin', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw: true}
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}