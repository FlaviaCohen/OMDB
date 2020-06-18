const User = require('./User');
const Fav = require('./Fav');

Fav.belongsTo(User);

module.exports = { User, Fav }