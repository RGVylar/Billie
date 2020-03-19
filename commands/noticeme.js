const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DB = config.DB;
module.exports = {
  	name: 'noticeme',
  	description: 'set noticeme!',
  	execute(msg, args) {
		const MONGO = config.MONGO;
	    const id = msg.member.user.id;
	    MongoClient.connect(MONGO, function(err, db) {
			if (err) throw err;
			var dbo = db.db(DB);
			var query = { user: id };
			dbo.collection("whitelist").deleteMany(query, function(err, obj) {
			    if (err) throw err;
			    msg.channel.send(DB+" desu");
			    db.close();
			});
		});
  	},
};