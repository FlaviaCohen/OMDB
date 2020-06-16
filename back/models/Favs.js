const S = require('sequelize');
const db = require('../config/db');

class Favs extends S.Model {}
Favs.init({
    id: {
        type: S.STRING,
        primaryKey: true
    }
},{ sequelize: db, modelName: 'favs'})

module.exports = Favs; 