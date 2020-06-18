const S = require('sequelize');
const db = require('../config/db');

class Fav extends S.Model {}
Fav.init({
    title: {
        type: S.STRING,
        allowNull: false
    },
    poster: {
        type: S.STRING,
    },

},{ sequelize: db, modelName: 'fav'})

module.exports = Fav;