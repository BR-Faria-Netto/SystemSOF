const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let TipoLicitacoes = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'tipoLicitacoes'}

);

module.exports = mongoose.model('TipoLicitacoes', TipoLicitacoes);

