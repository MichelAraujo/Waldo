const assert = require('assert');
const Connection = require('../app/database/Connection');
const ConnectionCollection = require('../src/helpers/database/ConnectionCollection');
const mongoose = require('mongoose');

describe('Connection', () => {

  let connection = null;

  before(() => {
    connection = new Connection(ConnectionCollection);
  });

  it('#Teste se a classe Connection instancia', (done) => {
  	assert.ok(connection instanceof Connection);
  	done();
  });

  it('#Teste se o constructor dispara uma exception adequadamente', (done) => {
    assert.throws(() => {new Connection()}, Error);
    done();
  });

  it('#Teste se esta conectando com o banco de dados', (done) => {
    connection.connect();
    assert.ok(ConnectionCollection.exists('waldo'), 'Teste do metodo exists');
    assert.ok(ConnectionCollection.get('waldo') !== null, 'Teste do metodo get');
  	done();
  });
});