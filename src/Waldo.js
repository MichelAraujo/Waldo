
class Waldo {

  constructor(personClass) {
    if (!personClass) {
      throw new Error('Parametro Person invalido');
    }

    this.interaction = null;
    this.personClass = personClass;
    this.person = new personClass();
  }

  setInteraction(interaction) {
  	this.interaction = interaction;
  }

  getResponse(callback) {
    if (this.interaction.indexOf('Quem é') !== -1) {
      const name = this.interaction.substr(6).trim();

      if (name == 'Michel Araujo') {
        callback('E o meu Criador!');
        return;
      }

      this.personClass.findOne({ name: name }, 'name age sex', (err, person) => {
        if (person === null) {
          callback('Não sei!');
        } else {
          const result = 'Nome: ' + person.name + ' Idade: '
            + person.age + ' Sexo: ' + person.sex;

          callback(result);
        }
      });
    }

    if (this.interaction.indexOf('Quer conhecer o') !== -1) {
      const response = ['Sim', 'Não'];
      callback(response[Math.floor(Math.random() * response.length)]);
    }

    if (this.interaction.indexOf('Esse é o ') !== -1) {
      const name = this.interaction.substr(9).trim();
      this.person.name = name;
      this.person.save();

      callback('Ola ' + name + '! Quantos anos você tem?');
    }
    
    if (this.interaction.indexOf('Ele tem') !== -1) {
      const age = this.interaction.substr(7).trim();
      this.person.age = age;
      this.person.save();
      callback('E qual seu sexo?');
    }

    if (this.interaction.indexOf('O sexo dele é') !== -1) {
      const sex = this.interaction.substr(13).trim();
      this.person.sex = sex;
      this.person.save();

      this.person = new this.personClass();
      callback('Ok, prazer em conhece-lo');
    }

  	if (this.interaction === 'oi') {
      callback('Oi, como vai?');
  	}
  }
}

module.exports = Waldo;
