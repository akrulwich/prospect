var express = require('express');
var router = express.Router();
var db = require('../models');
var Sentence = db.Sentence;

module.exports = function (app) {
  app.use('/', router);
};

// Sentence.create({text:'A'}).complete(function(err, A){
//   Sentence.create({text:'B'}).complete(function(err, B){
//     A.setTopic(B).save().complete(function(){

//     });
//   });
// })

router.get('/', function (req, res, next) {
  var queryOptions = {};
  if (req.query.hasOwnProperty('text')){
    queryOptions['text'] = req.query.text;
  }
  if (req.query.hasOwnProperty('topic')){
    queryOptions['topic'] = req.query.topic;
  }
  if (req.query.hasOwnProperty('subject')){
    queryOptions['subject'] = req.query.subject;
  }
  if (req.query.hasOwnProperty('object')){
    queryOptions['object'] = req.query.object;
  }
  if (req.query.hasOwnProperty('prototype')){
    queryOptions['prototype'] = req.query.prototype;
  }

  Sentence.findAll({
      where: queryOptions,
      include: [
          {model: Sentence, as: 'Topic'},
          {model: Sentence, as: 'Subject'},
          {model: Sentence, as: 'Object'},
          {model: Sentence, as: 'Prototype'}
      ]
  }).then(function(sentences) {
    res.send(JSON.stringify(sentences));
  });

  // Sentence.findAll({ where: queryOptions}).then(function(sentences) {
  //   res.send(JSON.stringify(sentences));
  // })
/*

SELECT sentences.id, sentences.text, sentences.createdat, sentences.updatedat, sentences.subjectid, sentences.topicid, sentences.objectid, sentences.prototypeid, 
    topic.text as topic_text,
    subject.text as subject_text,
    object.text as object_text,
    prototype.text as prototype_text
  from sentences inner join sentences topic on sentences.topicid = topic.id
                    inner join sentences subject on sentences.subjectid = subject.id
                    inner join sentences object on sentences.objectid = object.id
                    inner join sentences prototype on sentences.prototypeid = prototype.id;

*/
});
