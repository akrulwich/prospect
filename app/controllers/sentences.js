var express = require('express');
var router = express.Router();
var db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/:sentence/', function (req, res, next) {
  console.log(req.path);
  
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
