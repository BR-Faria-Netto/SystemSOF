const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let ProgTrabalhos = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'progTrabalhos'}

);

module.exports = mongoose.model('ProgTrabalhos', ProgTrabalhos);

