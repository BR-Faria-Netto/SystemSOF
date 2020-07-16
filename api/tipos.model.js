const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Tipos = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'tipos'}

);

module.exports = mongoose.model('Tipos', Tipos);

