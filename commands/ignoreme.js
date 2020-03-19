const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DB = config.DB;
module.exports = {
	name: 'ignoreme',
	description: 'set ignoreme!',
	execute(msg, args) {
		const MONGO = config.MONGO;
		const ignored = msg.member.user.id;
		var query = { user:ignored };

		MongoClient.connect(MONGO, function(err, db) {
			if (err) throw err;
			var dbo = db.db(DB);
			dbo.collection("whitelist").find(query).toArray(function(err, result) {
				if (err) throw err;
				if(typeof result !== 'undefined'){
					MongoClient.connect(MONGO, function(err, db) {
						if (err) throw err;
						var dbo = db.db(DB);
						dbo.collection("whitelist").insertOne(myobj, function(err, res) {
							if (err) throw err;
							msg.channel.send("Do you even exist?");
							db.close();
						});
					});	
				}
				else{
					msg.channel.send("Im already ignoring you");
				}
				db.close();
			});
		});
	},
};