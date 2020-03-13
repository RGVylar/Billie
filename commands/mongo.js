const mongoose = require('mongoose');
const config = require("../config.js");
module.exports = {
  name: 'mongo',
  description: 'mongo!',
  execute(msg, args) {
	const MONGO = config.MONGO;
  	mongoose.connect(MONGO, {useNewUrlParser: true}).then(
  	var db = mongoose.connection;
	db.on('error', msg.channel.send('connection error'));
	db.once('open', function() {
	  msg.channel.send('we are connected!');
	}).catch(err => { msg.channel.send(err) });
  },
};
