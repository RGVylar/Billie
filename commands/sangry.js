const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'sangry',
	description: 'set angry!',
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
					dbo.createCollection("angry", function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){

							dbo.collection("angry").insertOne(myobj, function(err, res) {
								if (err) throw err;
								msg.channel.send("1 angry inserted");
								db.close();
							});
						}
						db.close();
					});
				});
			}
		}
		else{
			msg.channel.send("You dont have permission");
		}
		msg.delete();
	},
};