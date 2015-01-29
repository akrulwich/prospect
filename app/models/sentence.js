// Example model


module.exports = function (sequelize, DataTypes) {

  var Sentence = sequelize.define('Sentence', {
    'text': DataTypes.TEXT,
    'slug': {type: DataTypes.TEXT, unique: true, get: function(){}},
    'final': {type: DataTypes.BOOLEAN, defaultValue: true} //This generates the slug, eg.
  }, {
    classMethods: {
      associate: function (models) {
        Sentence.belongsTo(Sentence, {as: 'Topic', foreignKey:'TopicId'});
        Sentence.belongsTo(Sentence, {as: 'Subject', foreignKey:'SubjectId'});
        Sentence.belongsTo(Sentence, {as: 'Antecedent', foreignKey:'AntecedentId'});
        Sentence.belongsTo(Sentence, {as: 'Prototype', foreignKey:'PrototypeId'});

        Sentence.hasMany(Sentence, {as: 'Examples', foreignKey: 'TopicId'});
        Sentence.hasMany(Sentence, {as: 'Descriptions', foreignKey: 'SubjectId'});
        Sentence.hasMany(Sentence, {as: 'Consequents', foreignKey: 'AntecedentId'});
        Sentence.hasMany(Sentence, {as: 'Instances', foreignKey: 'PrototypeId'});
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

