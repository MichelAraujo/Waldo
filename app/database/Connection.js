const mongoose = require('Mongoose');

class Connection {
  
  connect() {
    mongoose.connect('mongodb://localhost:32768/waldo');
    return mongoose;
  }
}

module.exports = Connection;
