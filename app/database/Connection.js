const mongoose = require('Mongoose');
const logger = require('winston');

class Connection {
  
  constructor(connectionCollection) {
    if (!connectionCollection) {
      throw new Error('Parametro ConnectionCollection invalido');
    }

  	this.connectionCollection = connectionCollection;
  }

  connect(callback) {
  	const that = this;
    const conn = mongoose.createConnection('mongodb://localhost:32768/waldo');
   
    conn.on('error', (err) => {
      logger.error(`Mongoose error: ${err}`);	
    });

    conn.on('connected', () => {
      logger.info('Successfully connected');
    });

    process.on('sigint', () => {
      that.connectionCollection.get('waldo').close(() => {
      	logger.info('Mongoose default connection disconnected through app termination');
        process.exit(0);
      });
    });
    
    this.connectionCollection.add('waldo', conn);
    
    if (callback) {
      callback();
    }
  }
}

module.exports = Connection;
