/* eslint-disable array-callback-return */
// business.route.js
const express = require('express');

const unidorcamentariasRoute = express.Router();
// Require Business model in our routes module
let baseServer = require('./unidorcamentarias.model');

// Defined store route
unidorcamentariasRoute.route('/add').post(function (req, res) {
  let baseLocal = new baseServer(req.body);
  baseLocal.save()
    .then(baseLocal => {
      res.status(200).json({'tipo': 'business in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
unidorcamentariasRoute.route('/').get(function (req, res) {
    baseServer.find(function(err, baseLocal){
    if(err){
      console.log(err);
    }
    else {
      res.json(baseLocal);
    }
  });
});

// Defined edit route
unidorcamentariasRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  baseServer.findById(id, function (err, baseLocal){
      res.json(baseLocal);
  });
});

//  Defined update route
unidorcamentariasRoute.route('/update/:id').post(function (req, res) {
    baseServer.findById(req.params.id, function(err, baseLocal) {
    if (!baseLocal)
      res.status(404).send("data is not found");
    else {
        baseLocal.codigo = req.body.codigo;
        baseLocal.descricao = req.body.descricao;
        baseLocal.save().then(baseLocal => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
unidorcamentariasRoute.route('/delete/:id').get(function (req, res) {
    baseServer.findByIdAndRemove({_id: req.params.id}, function(err, baseLocal){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = unidorcamentariasRoute;
