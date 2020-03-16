const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  	name: 'noticeme',
  	description: 'set noticeme!',
  	execute(msg, args) {
		const MONGO = config.MONGO;
	    const id = msg.member.user.id;
	    MongoClient.connect(MONGO, function(err, db) {
			if (err) throw err;
			var dbo = db.db("billie");
			var myquery = { user: id };
			dbo.collection("whitelist").deleteMany(myquery, function(err, obj) {
			    if (err) throw err;
			    msg.channel.send("Billie desu");
			    db.close();
			});
		});
  	},
};