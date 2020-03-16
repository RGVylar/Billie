const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  name: 'sfuck',
  description: 'set fuck!',
  execute(msg, args) {
    if(msg.member.roles.find(r => r.name === "tester")){
		const MONGO = config.MONGO;
	  	if (!args || args == "") {msg.channel.send("I need an url");}
	  	else if (args.includes('-s')) {
	  		args.splice(args.indexOf('-s'), 1);
	  		MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var myobj = { url:args };
			  dbo.collection("strapon").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("1 strapon lewd inserted");
			    db.close();
			  });
			});
	  }
	  	else if (args.includes('-a')) {
	  		args.splice(args.indexOf('-a'), 1);
	  		MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var myobj = { url:args };
			  dbo.collection("anal").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("1 anal lewd inserted");
			    db.close();
			  });
			});
	  }
	  	else{
	  		MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var myobj = { url:args };
			  dbo.collection("fuck").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("1 lewd inserted");
			    db.close();
			  });
			});
		}
	}else{msg.channel.send("You dont have permission");}
	msg.delete();
  },
};
