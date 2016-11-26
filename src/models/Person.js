const Schema = require('mongoose').Schema;
const ConnectionCollection = require('../helpers/database/ConnectionCollection');

const Person = new Schema({
  name: String,
  age: Number,
  sex: String
});

module.exports = ConnectionCollection.get('waldo').model('person', Person);
