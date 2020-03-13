const mongoose = require('mongoose');
const config = require("../config.js");
module.exports = {
  name: 'mongo',
  description: 'mongo!',
  execute(msg, args,MONGO,mongoose) {
	const MONGO = config.MONGO;
	mongoose.connect(MONGO, {useNewUrlParser: true});
	var db = mongoose.connection;
	db.on('error', msg.channel.send("connection error"));
	db.once('open', function() {
	  msg.channel.send("connection success");
	});  
  },
};
