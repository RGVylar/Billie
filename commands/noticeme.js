const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DB = config.DB;
module.exports = {
  	name: 'noticeme',
  	description: 'Bot will make you casito :3',
  	execute(msg, args) {
		const MONGO = config.MONGO;
		var id;
		if(msg.channel.type=='dm'){
			id = msg.author.id;
		}
		else{
			id = msg.member.user.id;
		}
	    MongoClient.connect(MONGO, function(err, db) {
			if (err) throw err;
			var dbo = db.db(DB);
			var initial = DB.substring(0, 1);
			initial=initial.toUpperCase();
			var rest = DB.substring(1, DB.length);
			var name = initial+rest;
			var query = { user: id };
			dbo.collection("whitelist").deleteMany(query, function(err, obj) {
			    if (err) throw err;
			    msg.channel.send(name+" desu");
			    db.close();
			});
		});
  	},
};