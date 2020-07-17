/* eslint-disable array-callback-return */
// business.route.js

const express = require('express');

const tiposRoute = express.Router();
// Require Business model in our routes module
let Tipo = require('./tipos.model');

// Defined store route
tiposRoute.route('/add').post(function (req, res) {
  let tipo = new Tipo(req.body);
  tipo.save()
    .then(tipo => {
      res.status(200).json({'tipo': 'business in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
tiposRoute.route('/').get(function (req, res) {
    Tipo.find(function(err, tipo){
    if(err){
      console.log(err);
    }
    else {
      res.json(tipo);
    }
  });
});

// Defined edit route
tiposRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Tipo.findById(id, function (err, tipo){
      res.json(tipo);
  });
});

//  Defined update route
tiposRoute.route('/update/:id').post(function (req, res) {
    Tipo.findById(req.params.id, function(err, tipo) {
    if (!tipo)
      res.status(404).send("data is not found");
    else {
        tipo.codigo = req.body.codigo;
        tipo.descricao = req.body.descricao;
        tipo.save().then(tipo => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
tiposRoute.route('/delete/:id').get(function (req, res) {
    Tipo.findByIdAndRemove({_id: req.params.id}, function(err, tipo){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

// Defined delete | remove | destroy route
tiposRoute.route('/delete/:id').get(function (req, res) {
  Tipo.find({_id: req.params.id}, function(err, tipo){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = tiposRoute;
