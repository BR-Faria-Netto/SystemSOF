const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let EventoNdcs = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'eventoNdcs'}

);

module.exports = mongoose.model('EventoNdcs', EventoNdcs);

