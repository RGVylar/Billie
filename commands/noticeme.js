const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  	name: 'noticeme',
  	description: 'set noticeme!',
  	execute(msg, args) {
		const MONGO = config.MONGO;
		MongoClient.connect(MONGO, function(err, db) {
	      	if (err) throw err;
	      	var dbo = db.db("billie");
	      	dbo.collection("whitelist").find({}).toArray(function(err, result) {
	            if (err) throw err;
	          	const user = msg.member.user.tag;
	         	result[randomIndex].url;
	            gif[0]
	        	return msg.channel.send("Billie desu");
	      	}); 
	      	db.close();
	    });
  	},
};