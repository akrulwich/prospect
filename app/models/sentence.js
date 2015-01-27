// Example model


module.exports = function (sequelize, DataTypes) {

  var Sentence = sequelize.define('Sentence', {
    'sentence': DataTypes.TEXT,
    'slug': DataTypes.TEXT,
    'final': {type: DataTypes.BOOLEAN, defaultValue: true} //This generates the slug, eg.
  }, {
    classMethods: {
      associate: function (models) {
        Sentence.hasOne(Sentence, {as: 'Topic', foreignKey:'TopicId'});
        Sentence.hasOne(Sentence, {as: 'Subject', foreignKey:'SubjectId'});
        Sentence.hasOne(Sentence, {as: 'Prototype', foreignKey:'PrototypeId'});
      }
    },
    instanceMethods: {
      finalize: function(){
        //create slug
        //set final to true
      },
      convertToSlug: function(){
        return this.sentence
        .replace(/ /g,'_')
        .replace(/[^\w-]+/g,'');
      }
    }
  });
  return Sentence;
};

