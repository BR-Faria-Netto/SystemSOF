const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let NaturezaDespesas = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'naturezaDespesas'}

);

module.exports = mongoose.model('NaturezaDespesas', NaturezaDespesas);

