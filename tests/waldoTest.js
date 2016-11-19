const assert = require('assert');
const Waldo = require('../src/Waldo');

describe('waldo', () => {
  it('#Teste de instancia da classe', () => {
  	const waldo = new Waldo();
  	assert.ok(waldo instanceof Waldo);
  });
});