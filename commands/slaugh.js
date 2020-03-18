const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DEV = config.DEV;
module.exports = {
  name: 'slaugh',
  description: 'set laugh!',
  execute(msg, args) {
	const MONGO = config.MONGO;
    if(msg.member.id==DEV){
	  	if (!args || args == "") {msg.channel.send("I need an url");}	
	  	else{
		  	MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var myobj = { url:args };
			  dbo.collection("laugh").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("1 laugh inserted");
			    db.close();
			  });
			});
		}
	}else{msg.channel.send("You dont have permission");}
	msg.delete();
  },
};