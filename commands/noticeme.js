const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  	name: 'noticeme',
  	description: 'set noticeme!',
  	execute(msg, args) {
		const MONGO = config.MONGO;
	    const user = msg.member.user.tag;
	    MongoClient.connect(MONGO, function(err, db) {
			if (err) throw err;
			var dbo = db.db("billie");
			var myquery = { user: user };
			dbo.collection("whitelist").deleteOne(myquery, function(err, obj) {
			    if (err) throw err;
			    msg.channel.send("Billie desu");
			    db.close();
			});
		});
  	},
};