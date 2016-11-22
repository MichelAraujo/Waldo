
class Waldo {

  constructor() {
  	this.interaction = null;
  }

  setInteraction(interaction) {
  	this.interaction = interaction;
  }

  getResponse() {
    if (this.interaction.indexOf('Quem é') !== -1) {
      const name = this.interaction.substr(6).trim();

      if (name == 'Michel Araujo Pinto') {
      	return 'E o meu Criador!';
      } else {
      	return 'É o criador do protocolo HTTP';
      }
    }

  	if (this.interaction === 'oi') {
  	  return 'Oi, como vai?';
  	}
  }
}

module.exports = Waldo;
