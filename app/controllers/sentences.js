var express = require('express');
var router = express.Router();
var db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/:sentence/:relation', function (req, res, next) {
  console.log(req.path);
  // db.Sentence.findAll().success(function (sentences) {
  //   res.render('index', {
  //     title: 'Generator-Express MVC',
  //     sentences: sentences
  //   });
  // });
  res.send(req.params.sentence + ', ' + req.params.relation);
});

router.get('/:sentence/', function (req, res, next) {
  console.log(req.path);
  // db.Sentence.findAll().success(function (sentences) {
  //   res.render('index', {
  //     title: 'Generator-Express MVC',
  //     sentences: sentences
  //   });
  // });
  res.send(req.params.sentence + ', ' + req.params.relation);
});

router.get('/:sentence/edit', function (req, res, next) {
  console.log(req.path);
  // db.Sentence.findAll().success(function (sentences) {
  //   res.render('index', {
  //     title: 'Generator-Express MVC',
  //     sentences: sentences
  //   });
  // });
  res.send(req.params.sentence + ', ' + req.params.relation);
});

router.get('/:sentence/:relation/edit', function (req, res, next) {
  console.log(req.path);
  // db.Sentence.findAll().success(function (sentences) {
  //   res.render('index', {
  //     title: 'Generator-Express MVC',
  //     sentences: sentences
  //   });
  // });
  res.send(req.params.sentence + ', ' + req.params.relation);
});