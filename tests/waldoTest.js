const assert = require('assert');
const Waldo = require('../src/Waldo');

describe('waldo', () => {
  it('#Teste de instancia da classe', (done) => {
  	const waldo = new Waldo();
  	assert.ok(waldo instanceof Waldo);
  	done();
  });

  it('#Teste se Waldo responde oi', (done) => {
  	const waldo = new Waldo();
  	waldo.setInteraction('oi');
  	assert.equal(waldo.getResponse(), 'Oi, como vai?');
  	done();
  });

  it('#Teste se Waldo reconhece alguém', (done) => {
  	const waldo = new Waldo();
  	waldo.setInteraction('Quem é Michel Araujo Pinto');
  	assert.equal(waldo.getResponse(), 'E o meu Criador!');

  	waldo.setInteraction('Quem é Tim Berners-Lee');
  	assert.equal(waldo.getResponse(), 'É o criador do protocolo HTTP');

  	done();
  });
});