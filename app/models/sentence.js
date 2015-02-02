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
      }
    },
    classMethods: {
      convertSlugToText: function(){},
      ofSubject: function(){return Sentences.find({where: });},
      ofTopic: function(){},
      ofAntecedent: function(){},
      ofPrototype: function(){}
    },
    instanceMethods: {
      // how: function(){ return this.getExamples() },
      // why: function(){ return this.getDescriptions() },
      // getDescriptions:
      // Sentence.hasMany(Sentence, {as: 'Descriptions', foreignKey: 'SubjectId'}); // Or relations or properties
      // Sentence.hasMany(Sentence, {as: 'Examples', foreignKey: 'TopicId'}); // Or illustrations
      // Sentence.hasMany(Sentence, {as: 'Consequents', foreignKey: 'AntecedentId'}); //or effects
      // Sentence.hasMany(Sentence, {as: 'Instances', foreignKey: 'PrototypeId'}); //or articulations
      "getTextAsSlug": function(){}
    }
  });
  return Sentence;
};

