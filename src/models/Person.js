// const mongoose = require('mongoose');













const Connection = require('../../app/database/Connection');
const con = new Connection();
const mongoose = con.connect();

const Schema = mongoose.Schema;

const Person = new Schema({
  name: String,
  age: Number,
  sex: String
});

module.exports = mongoose.model('person', Person);
