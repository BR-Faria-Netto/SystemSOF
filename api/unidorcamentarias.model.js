const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let UnidOrcamentarias = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'unidOrcamentarias'}

);

module.exports = mongoose.model('UnidOrcamentarias', UnidOrcamentarias);

