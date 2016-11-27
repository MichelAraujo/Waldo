let instance;

/**
 * ConnectionCollection
 *
 * Classe para guardar conexoes de banco
 *
 * @class
 * @author Guilherme Santos <guilhermedossantos91@gmail.com>
 * @version 1.0.0
 * @alias app.helpers.database.ConnectionCollection
 */
class ConnectionCollection {

  /**
   * @constructor
   * @returns {*}
   */
  constructor() {
    if (!instance) {
      instance = this;
    }
    /**
     * @private
     * @type {Array}
     */
    this.dbs = [];
    return instance;
  }

  /**
   * Adiciona uma nova conexao
   *
   * @methodOf app.helpers.ConnectionCollection
   * @param {string} name
   * @param {*} connection
   * @returns {*}
   */
  add(name, connection) {
    if (this.exists(name) === false) {
      this.dbs.push({
        name,
        connection,
      });
    }
    return this;
  }

  /**
   * Obtem uma conexao
   *
   * @methodOf app.helpers.ConnectionCollection
   * @param {string} name
   * @returns {*|MongooseConnection}
   */
  get(name) {
    let connection = null;
    this.dbs.forEach((db) => {
      if (db.name === name) {
        connection = db.connection;
      }
    });
    return connection;
  }

  /**
   * Verifica se a conexao ja existe
   *
   * @param {string} name
   * @returns {boolean}
   */
  exists(name) {
    let exists = false;
    this.dbs.forEach((db) => {
      if (db.name === name) {
        exists = true;
      }
    });
    return exists;
  }
}

module.exports = new ConnectionCollection();
