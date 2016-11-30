const Connection = require('./app/database/Connection');
const ConnectionCollection = require('./src/helpers/database/ConnectionCollection');

const con = new Connection(ConnectionCollection);
con.connect();

const Person = require('./src/models/Person');

const Waldo = require('./src/Waldo');
const waldo = new Waldo(Person);

process.stdin.on('readable', () => {
  let interaction = process.stdin.read();

  if (interaction) {
    interaction = interaction.toString().replace(/\n/, '');

    waldo.setInteraction(interaction);
    waldo.getResponse((result) => {
      console.log(result);
    });
  }
});
