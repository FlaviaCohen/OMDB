const S = require('sequelize');
const db = require('../config/db');
const crypto = require('crypto');

class User extends S.Model {}
User.init({
    email: {
        type: S.STRING,
        allowNull: false
    },
    password: {
        type: S.STRING,
        allowNull: false
    },
    salt: {
        type: S.STRING
    }
},{ sequelize: db, modelName: 'user'})

User.addHook('beforeCreate', (user)=>{
    user.salt = crypto.randomBytes(20).toString('hex') //agrega 20 caracteres random, lo convierte a string y a hexadecimal
    user.password = hashPassword(user.password)
})

User.prototype.hashPassword = function(password){
    return crypto.Hmac('sha1', this.salt).update(password).digest('hex')
}

module.exports = User; 