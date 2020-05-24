const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX'); /** Modo de gerar uma ID randomica de 4 Bytes e converter em uma String HEX */
}