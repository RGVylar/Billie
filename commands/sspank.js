const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DEV = config.DEV;
const DEV2 = config.DEV2;
const DEV5 = config.DEV5;
module.exports = {
  name: 'sspank',
  description: 'set spank!',
  execute(msg, args) {
	const MONGO = config.MONGO;
    if(msg.member.id==DEV||msg.member.id==DEV2||msg.member.id==DEV5){
	  	if (!args || args == "") {msg.channel.send("I need an url");}	
	  	else{
		  	MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db(DB);
			  var myobj = { url:args };
			  dbo.collection("spank").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("1 spank inserted");
			    db.close();
			  });
			});
		}
	}else{msg.channel.send("You dont have permission");}
	msg.delete();
  },
};