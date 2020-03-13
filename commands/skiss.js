const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  name: 'skiss',
  description: 'set kiss!',
  execute(msg, args) {
    if(msg.member.roles.find(r => r.name === "tester")){
	  	if (!args || args == "") {msg.channel.send("I need an url");}
	  	else{
			const MONGO = config.MONGO;
		  	MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var myobj = { url:args };
			  dbo.collection("kiss").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("1 Kiss inserted");
			    db.close();
			  });
			});
		}
	}
	msg.delete();
  },
};
