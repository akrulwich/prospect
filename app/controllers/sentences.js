var express = require('express');
var router = express.Router();
var db = require('../models');
var Sentence = db.Sentence;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var queryOptions = {};
  Sentence.findAll({ where: queryOptions}).then(function(sentences) {
    res.send(JSON.stringify(sentences));
  })
});
