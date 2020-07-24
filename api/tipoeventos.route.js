/* eslint-disable array-callback-return */
// business.route.js

const express = require('express');

const tipoeventosRoute = express.Router();
// Require Business model in our routes module
let Tipo = require('./tipoeventos.model');

// Defined store route
tipoeventosRoute.route('/add').post(function (req, res) {
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
tipoeventosRoute.route('/').get(function (req, res) {
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
tipoeventosRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Tipo.findById(id, function (err, tipo){
      res.json(tipo);
  });
});

//  Defined update route
tipoeventosRoute.route('/update/:id').post(function (req, res) {
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
tipoeventosRoute.route('/delete/:id').get(function (req, res) {
    Tipo.findByIdAndRemove({_id: req.params.id}, function(err, tipo){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = tipoeventosRoute;
