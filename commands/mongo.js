const MongoClient = require('mongoose'); 
const config = require("../config.js");
module.exports = {
  name: 'mongo',
  description: 'mongo!',
  execute(msg, args) {
	const url = config.MONGO;
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  msg.channel.send("Database created!");
	  db.close();
	});
  },
};
