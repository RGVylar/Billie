const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  	name: 'ignoreme',
  	description: 'set ignoreme!',
  	execute(msg, args) {
		const MONGO = config.MONGO;
	  	MongoClient.connect(MONGO, function(err, db) {
		  	if (err) throw err;
		  	var dbo = db.db("billie");
		  	const ignored = msg.member.user.id;
		  	var myobj = { user:ignored };
		  	dbo.collection("whitelist").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("Do you even exist?");
			    db.close();
		  	});
		});
  	},
};