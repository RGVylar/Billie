const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DEV = config.DEV;
const DB = config.DB;
module.exports = {
	name: 'skiss',
	description: 'set kiss!',
	execute(msg, args) {
		const MONGO = config.MONGO;
		if(msg.member.id==DEV){
			if (!args || args == "") {msg.channel.send("I need an url");}
			else if (args.includes('-l')) {
				args.splice(args.indexOf('-l'), 1);
				MongoClient.connect(MONGO, function(err, db) {
					if (err) throw err;
					var dbo = db.db(DB);
					var myobj = { url:args };
					dbo.createCollection("lewdss", function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){

							dbo.collection("lewdss").insertOne(myobj, function(err, res) {
								if (err) throw err;
								msg.channel.send("1 lewdss inserted");
								db.close();
							});
						}
						db.close();
					});
				});
			}	
			else{
				MongoClient.connect(MONGO, function(err, db) {
					if (err) throw err;
					var dbo = db.db(DB);
					var myobj = { url:args };
					dbo.createCollection("kiss", function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){

							dbo.collection("kiss").insertOne(myobj, function(err, res) {
								if (err) throw err;
								msg.channel.send("1 kiss inserted");
								db.close();
							});
						}
						db.close();
					});
				});
			}
		}else{msg.channel.send("You dont have permission");}
		msg.delete();
	},
};