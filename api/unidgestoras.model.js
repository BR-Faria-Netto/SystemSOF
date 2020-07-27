const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let UnidGestoras = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'unidGestoras'}

);

module.exports = mongoose.model('UnidGestoras', UnidGestoras);

