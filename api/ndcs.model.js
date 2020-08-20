const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Ndcs = new Schema(
  {
    numndc: {
      type: String
    },
    procndc: {
      type: String
    },
    datandc: {
      type: String
    },
    evendc: {
      type: String
    },
    secret: {
      type: String
    },
    unigest: {
      type: String
    },
    progtrab: {
      type: String
    },
    natdesp: {
      type: String
    },
    fontrec: {
      type: String
    },
    nomefav: {
      type: String
    },
    ender: {
      type: String
    },
    bai: {
      type: String
    },
    cid: {
      type: String
    },
    cep: {
      type: String
    },
    uf: {
      type: String
    },
    cnpj: {
      type: String
    },
    banrec: {
      type: String
    },
    valor: {
      type: String
    },
    extenso: {
      type: String
    },
    descdesp: {
      type: String
    },
    jan: {
      type: String
    },
    fev: {
      type: String
    },
    mar: {
      type: String
    },
    abr: {
      type: String
    },
    mai: {
      type: String
    },
    jun: {
      type: String
    },
    jul: {
      type: String
    },
    ago: {
      type: String
    },
    set: {
      type: String
    },
    out: {
      type: String
    },
    nov: {
      type: String
    },
    dez: {
      type: String
    },
    baselegal: {
      type: String
    },
    emissor: {
      type: String
    },
    deleemi: {
      type: String
    },
    matemi: {
      type: String
    },
    dataemi: {
      type: String
    },
    ordenador: {
      type: String
    },
    deleord: {
      type: String
    },
    matord: {
      type: String
    },
    dataord: {
      type: String
    },
    ratificador: {
      type: String
    },
    delerat: {
      type: String
    },
    matrat: {
      type: String
    },
    datarat: {
      type: String
    }
},
      { collection: 'ndcs'}
);

module.exports = mongoose.model('Ndcs', Ndcs);
