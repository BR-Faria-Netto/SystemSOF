const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let FonteRecursos = new Schema(
{
  codigo: {
    type: String
  },
  descricao: {
    type: String
  }

},

{ collection: 'fonteRecursos'}

);

module.exports = mongoose.model('FonteRecursos', FonteRecursos);

