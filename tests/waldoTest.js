const assert = require('assert');
const Waldo = require('../src/Waldo');
const Connection = require('../app/database/Connection');
const ConnectionCollection = require('../src/helpers/database/ConnectionCollection');

describe('Waldo', () => {

	let waldo = null;

	before(() => {
    const connection = new Connection(ConnectionCollection);
    connection.connect();

    const Person = require('../src/models/Person');
		waldo = new Waldo(new Person());
	});

  it('#Teste de instancia da classe', (done) => {
  	assert.ok(waldo instanceof Waldo);
  	done();
  });

  it('#Teste se Waldo responde oi', (done) => {
  	waldo.setInteraction('oi');
  	assert.equal(waldo.getResponse(), 'Oi, como vai?');
  	done();
  });

  it('#Teste se Waldo reconhece alguém', (done) => {
  	waldo.setInteraction('Quem é Michel Araujo Pinto');
  	assert.equal(waldo.getResponse(), 'E o meu Criador!');

  	waldo.setInteraction('Quem é Tim Berners-Lee');
  	assert.equal(waldo.getResponse(), 'É o criador do protocolo HTTP');

		waldo.setInteraction('Quem é BlaBla');
		assert.equal(waldo.getResponse(), 'Não sei!');

    done();
  });
});
