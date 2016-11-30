const assert = require('assert');
const Waldo = require('../src/Waldo');
const Connection = require('../app/database/Connection');
const ConnectionCollection = require('../src/helpers/database/ConnectionCollection');

describe('Waldo', () => {

	let waldo = null;
	let Person = null;

	before(() => {
    const connection = new Connection(ConnectionCollection);
    connection.connect();

    Person = require('../src/models/Person');
		waldo = new Waldo(Person);
	});

  // Etapa 01
  it('#Teste de instancia da classe', (done) => {
  	assert.ok(waldo instanceof Waldo);
  	done();
  });

  it('#Teste se Waldo responde oi', (done) => {
  	waldo.setInteraction('oi');
    waldo.getResponse((result) => {
      assert.equal(result, 'Oi, como vai?');
      done();  
    });
  });

  it('#Teste se Waldo reconhece alguém', (done) => {
  	waldo.setInteraction('Quem é Michel Araujo');
    waldo.getResponse((result) => {
      assert.equal(result, 'E o meu Criador!');  
    });

		waldo.setInteraction('Quem é BlaBla');
    waldo.getResponse((result) => {
      assert.equal(result, 'Não sei!');
      done();
    });
  });
  // Fim etapa 01

  // Etapa 02 Com limpeza do banco
  it('#Teste se é possivel cadastrar uma pessoa', (done) => {
    waldo.setInteraction('Esse é o Vitor');
    waldo.getResponse((result) => {
      assert.equal(result, 'Ola Vitor! Quantos anos você tem?');
      done();
    });
  });

  it('#Teste se foi cadastrado o Vitor', (done) => {
    waldo.setInteraction('Quem é Vitor');
    waldo.getResponse((result) => {
      assert.ok(result.indexOf('Vitor') > 1);
      done()
    });
  });

  it('#Teste fazendo update nos dados de uma pessoa', (done) => {
    waldo.setInteraction('Ele tem 25');
    waldo.getResponse((result) => {
      assert.equal(result, 'E qual seu sexo?');
      done();
    });
  });

  it('#Teste se foi feito o update no usuario Vitor', (done) => {
    waldo.setInteraction('Quem é Vitor');
    waldo.getResponse((result) => {
      assert.ok(result.indexOf('25') > 1);
      done();
    });
  });

  after(() => {
    Person.remove().exec();
  });
});
