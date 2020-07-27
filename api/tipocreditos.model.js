const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let TipoCreditos = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'tipoCreditos'}

);

module.exports = mongoose.model('TipoCreditos', TipoCreditos);

