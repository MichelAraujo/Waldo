const Connection = require('./app/database/Connection');

const con = new Connection();
const mongoose = con.connect();



var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kittens2', kittySchema);
var k = new Kitten();
k.name = 'Teste name 3';

console.log(k.save());







process.stdin.on('readable', () => {
  let interaction = process.stdin.read();

  if (interaction) {
    interaction = interaction.toString().replace(/\n/, '');

    if (interaction == 'Ola') {
      console.log('Oi eu sou o Waldo');
    } else {
      console.log('Não entendi =(');
    }
  }
});
