var express = require('express');
var router = express.Router();
var db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/:slug/', function (req, res, next) {
  var N = req.query.N || 1;
  var relation = req.params.relation;
  var sentence = req.params.slug;

  // db.Sentence.create({
  //   text: 'Sentence A',
  // }).complete(function(err, A){
  //   db.Sentence.create({
  //     text: 'Sentence B',
  //   }).complete(function(err, B){
  //     A.setTopic(B);
  //     A.getTopic().then(function(_B){
  //       _B.getDescriptions().then(function(_A){
  //       });
  //     });
  //   });
  // });

  res.send('');
});
