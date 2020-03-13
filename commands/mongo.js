const mongoose = require('mongoose'); 
module.exports = {
  name: 'mongo',
  description: 'mongo!',
  execute(msg, args) {
	mongoose.connect(MONGO, {useNewUrlParser: true});
	var db = mongoose.connection;
	db.on('error', msg.channel.send("connection error"));
	db.once('open', function() {
	  msg.channel.send("connection success");
	});  
  },
};
