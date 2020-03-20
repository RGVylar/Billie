const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DEV = config.DEV;
const DEV2 = config.DEV2;
const DEV5 = config.DEV5;
const DB = config.DB;
module.exports = {
	name: 'sfuck',
	description: 'set fuck!',
	execute(msg, args) {
		if(msg.member.id==DEV||msg.member.id==DEV2||msg.member.id==DEV5){
			const MONGO = config.MONGO;
			if (!args || args == "") {msg.channel.send("I need an url");}
			else if (args.includes('-s')) {
				args.splice(args.indexOf('-s'), 1);
				MongoClient.connect(MONGO, function(err, db) {
					if (err) throw err;
					var dbo = db.db(DB);
					var myobj = { url:args };
					dbo.createCollection("strapon", function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){

							dbo.collection("strapon").insertOne(myobj, function(err, res) {
								if (err) throw err;
								msg.channel.send("1 strapon inserted");
								db.close();
							});
						}
						db.close();
					});
				});
			}
			else if (args.includes('-a')) {
				args.splice(args.indexOf('-a'), 1);
				MongoClient.connect(MONGO, function(err, db) {
					if (err) throw err;
					var dbo = db.db(DB);
					var myobj = { url:args };
					dbo.createCollection("anal", function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){

							dbo.collection("anal").insertOne(myobj, function(err, res) {
								if (err) throw err;
								msg.channel.send("1 anal inserted");
								db.close();
							});
						}
						db.close();
					});
				});
			}
			else if (args.includes('-o')) {
				args.splice(args.indexOf('-o'), 1);
				MongoClient.connect(MONGO, function(err, db) {
					if (err) throw err;
					var dbo = db.db(DB);
					var myobj = { url:args };
					dbo.createCollection("oral", function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){

							dbo.collection("oral").insertOne(myobj, function(err, res) {
								if (err) throw err;
								msg.channel.send("1 oral inserted");
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
					dbo.createCollection("fuck", function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){

							dbo.collection("fuck").insertOne(myobj, function(err, res) {
								if (err) throw err;
								msg.channel.send("1 fuck inserted");
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