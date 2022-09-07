const db = require('../Models/bd')

const Post = db.sequelize.define('usuarios', {
    Nome: {
        type: db.Sequelize.STRING
    },
    Email: {
        type: db.Sequelize.STRING
    },
    Senha: {
        type: db.Sequelize.STRING
    }
})
//Post.sync({force:true})
module.exports = Post