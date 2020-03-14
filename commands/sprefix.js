const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  name: 'sprefix',
  description: 'set prefix!',
  execute(msg, args) {
	const MONGO = config.MONGO;
    if(msg.member.roles.find(r => r.name === "tester")){
	  	if (!args || args == "") {msg.channel.send("I need an url");}	
	  	else{
		  	MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var myobj = { prefix:args };
			  dbo.collection("config").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("Prefix inserted!");
			    db.close();
			  });
			});
		}
	}else{msg.channel.send("You dont have permission");}
	msg.delete();
  },
};/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});*/