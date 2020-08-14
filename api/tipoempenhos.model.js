const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let TipoEmpenhos = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'tipoEmpenhos'}

);

module.exports = mongoose.model('TipoEmpenhos', TipoEmpenhos);

