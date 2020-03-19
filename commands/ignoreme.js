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
				console.log('user: '+result.user);
				console.log('results: '+result);
				if(result==''){
					if (err) throw err;
					var dbo = db.db(DB);
					dbo.collection("whitelist").insertOne(query, function(err, res) {
						if (err) throw err;
						msg.channel.send("Do you even exist?");
						db.close();
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
/*
dbo.collection("whitelist").find({}).toArray(function(err, result) {
		        if (err) throw err;
		        if(typeof result[0] !== 'undefined'){
		        	msg.channel.send("Im already ignoring you");
		        }
		        else{  
		          console.log("Config created");
		          var myobj = {  "prefix": [
		          "!"
		          ],
		          "count": "0"};
		          dbo.collection("config").insertOne(myobj, function(err, res) {
		            if (err) {
		              console.log("Error inserting config");
		            }
		            else{    
		              console.log("Config inserted");
		            }
		            db.close();
		          });
		        }
		        db.close();
		      }); */