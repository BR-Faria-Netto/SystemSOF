
const express = require('express');
const nadsRoute = express.Router();

// Require Business model in our routes module
let Nad = require('./nads.model');

// Defined store route
nadsRoute.route('/add').post(function (req, res) {
  let nad = new Nad(req.body);
  nad.save()
    .then(nad => {
      res.status(200).json({'Nads': 'business in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
nadsRoute.route('/').get(function (req, res) {
    Nad.find(function(err,nad){
    if(err){
      console.log(err);
    }
    else {
      res.json(nad);
    }
  });
});

// Defined edit route
nadsRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Nad.findById(id, function (err, nad){
      res.json(nad);
  });
});

//  Defined update route
nadsRoute.route('/update/:id').post(function (req, res) {
    Nad.findById(req.params.id, function(err, nad) {
    if (!nad)
      res.status(404).send("data is not found");
    else {
        nad.numnad = req.body.numnad;
        nad.procnad = req.body.procnad;
        nad.datanad = req.body.datanad;
        nad.evenad  = req.body.evenad;
        nad.catgast  = req.body.catgast;
        nad.adant  = req.body.adant;
        nad.secret  = req.body.secret;
        nad.unigest  = req.body.unigest;
        nad.uniorc  = req.body.uniorc;
        nad.progtrab = req.body.progtrab;
        nad.natdesp = req.body.natdesp;
        nad.fontrec = req.body.fontrec;
        nad.tipcre = req.body.tipcre;
        nad.banpag = req.body.banpag;
        nad.agepag = req.body.agepag;
        nad.ccpag = req.body.ccpag;
        nad.nomefav = req.body.nomefav;
        nad.ender = req.body.ender;
        nad.bai = req.body.bai;
        nad.cid = req.body.cid;
        nad.cep = req.body.cep;
        nad.cnpj = req.body.cnpj;
        nad.uf = req.body.uf;
        nad.banrec = req.body.banrec;
        nad.agerec = req.body.agerec;
        nad.ccrec = req.body.ccrec;
        nad.tipemp = req.body.tipemp;
        nad.valor = req.body.valor;
        nad.extenso = req.body.extenso;
        nad.descdesp = req.body.descdesp;
        nad.jan = req.body.jan;
        nad.fev = req.body.fev;
        nad.mar = req.body.mar;
        nad.abr = req.body.abr;
        nad.mai = req.body.mai;
        nad.jun = req.body.jun;
        nad.jul = req.body.jul;
        nad.ago = req.body.ago;
        nad.set = req.body.set;
        nad.out = req.body.out;
        nad.nov = req.body.nov;
        nad.dez = req.body.dez;
        nad.tiplic = req.body.tiplic;
        nad.dataabert = req.body.dataabert;
        nad.numerolic = req.body.numerolic;
        nad.baselegal = req.body.baselegal;
        nad.emissor = req.body.emissor;
        nad.deleemi = req.body.deleemi;
        nad.matemi = req.body.matemi;
        nad.dataemi = req.body.dataemi;
        nad.ordenador = req.body.ordenador;
        nad.deleord = req.body.deleord;
        nad.matord = req.body.matord;
        nad.dataord = req.body.dataord;
        nad.ratificador = req.body.ratificador;
        nad.delerat = req.body.delerat;
        nad.matrat = req.body.matrat;
        nad.datarat = req.body.datarat;
        nad.save().then(nad => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
nadsRoute.route('/delete/:id').get(function (req, res) {
    Nad.findByIdAndRemove({_id: req.params.id}, function(err, nad){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = nadsRoute;

