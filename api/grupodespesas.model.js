const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let GrupoDespesas = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'grupoDespesas'}

);

module.exports = mongoose.model('GrupoDespesas', GrupoDespesas);

