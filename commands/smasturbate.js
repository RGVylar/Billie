const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DEV = config.DEV;
module.exports = {
  name: 'smasturbate',
  description: 'set masturbation!',
  execute(msg, args) {
    if(msg.member.id==DEV){
		const MONGO = config.MONGO;
	  	if (!args || args == "") {msg.channel.send("I need an url");}
	  	else if (args.includes('-m')) {
	  		args.splice(args.indexOf('-m'), 1);
	  		MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var myobj = { url:args };
			  dbo.collection("multibate").insertOne(myobj, function(err, res) {
			    if (err) throw err;
			    msg.channel.send("1 multi lewd inserted");
			    db.close();
			  });
			});
	  }
	  	else{
	  		MongoClient.connect(MONGO, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("billie");
			  var myobj = { url:args };
			  dbo.collection("masturbate").insertOne(myobj, function(err, res) {
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
