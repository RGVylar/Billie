const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'sblush',
	description: 'set blush!',
	execute(msg, args) {
		const MONGO = config.MONGO;
		if(msg.member.id==DEV){
			if (!args || args == "") {
				msg.channel.send("I need an url");
			}	
			else{
				MongoClient.connect(MONGO, function(err, db) {
					if (err) throw err;
					var dbo = db.db(DB);
					var myobj = { url:args };
					dbo.createCollection("blush", function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){

							dbo.collection("blush").insertOne(myobj, function(err, res) {
								if (err) throw err;
								msg.channel.send("1 blush inserted");
								db.close();
							});
						}
						db.close();
					});
				}
			}
		}
		else{
			msg.channel.send("You dont have permission");
		}
		msg.delete();

	},
};