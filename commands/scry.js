const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  name: 'scry',
  description: 'set cry!',
  execute(msg, args) {
	const MONGO = config.MONGO;
    if(msg.member.roles.find(r => r.name === "tester")){
	  	if (!args || args == "") {msg.channel.send("I need an url");}	
	  	else{
		  	MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var myobj = { url:args };
			  dbo.collection("cry").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("1 cry inserted");
			    db.close();
			  });
			});
		}
	}else{msg.channel.send("You dont have permission");}
	msg.delete();
  },
};