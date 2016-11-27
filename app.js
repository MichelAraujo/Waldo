const Connection = require('./app/database/Connection');
const ConnectionCollection = require('./src/helpers/database/ConnectionCollection');

const con = new Connection(ConnectionCollection);
con.connect();

const Person = require('./src/models/Person');
// const person = new Person();

// person.name = 'Michel Araujo Pinto';
// person.age = 24;
// person.sex = 'm';
// console.log(person.save());

const Waldo = require('./src/Waldo');
const waldo = new Waldo(Person);

process.stdin.on('readable', () => {
  let interaction = process.stdin.read();

  if (interaction) {
    interaction = interaction.toString().replace(/\n/, '');

    waldo.setInteraction(interaction);
    console.log(waldo.getResponse());
  }
});