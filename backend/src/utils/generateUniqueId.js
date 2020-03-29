const crypo = require('crypto');

module.exports = function generateUniqueId() {
  return crypo.randomBytes(4).toString('HEX');
}