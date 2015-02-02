// Example model


module.exports = function (sequelize, DataTypes) {

  var Sentence = sequelize.define('Sentence', {
    'text': DataTypes.TEXT,
  }, {
    classMethods: {
      associate: function (models) {
        Sentence.belongsTo(Sentence, {as: 'Subject', foreignKey:'SubjectId'});
        Sentence.belongsTo(Sentence, {as: 'Topic', foreignKey:'TopicId'});
        Sentence.belongsTo(Sentence, {as: 'Antecedent', foreignKey:'AntecedentId'});
        Sentence.belongsTo(Sentence, {as: 'Prototype', foreignKey:'PrototypeId'});
        Sentence.belongsTo(Sentence, {as: 'Argument', foreignKey:'ArgumentId'});
      }
    },
    classMethods: {
      convertSlugToText: function(){},
      ofSubject: function(){},
      ofTopic: function(){},
      ofAntecedent: function(){},
      ofPrototype: function(){}
    },
    instanceMethods: {
      // how: function(){ return this.getExamples() },
      // why: function(){ return this.getDescriptions() },
      // getDescriptions:
      // getExamples
      // getConsequents
      // getInstances
      // etc
      "getTextAsSlug": function(){}
    }
  });
  return Sentence;
};

