const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DEV = config.DEV;
module.exports = {
  name: 'prefix',
  description: 'set prefix!',
  execute(msg, args) {
	const MONGO = config.MONGO;
    if(msg.guild.owner||msg.member.id==DEV){
	  	if (!args || args == "") {msg.channel.send("I need the new prefix");}	
	  	else{ 	
			MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var PREFIX = args;
			  var myquery = { prefix: /^/ };
			  var newvalues = {$set: {prefix: PREFIX} };
			  dbo.collection("config").updateMany(myquery, newvalues, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("Prefix updated to: `"+PREFIX+"`");
			    db.close();
			  });
			});
		}
	}else{msg.channel.send("You dont have permission");}
	msg.delete();
  },
};