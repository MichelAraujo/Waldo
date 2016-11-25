const mongoose = require('Mongoose');
const logger = require('winston');

class Connection {
  
  connect() {
    mongoose.connect('mongodb://localhost:32768/waldo');
   
    logger.info('Successfully connected');
    
    return mongoose;
  }
}

module.exports = Connection;
