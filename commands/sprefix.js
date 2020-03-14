const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  name: 'sprefix',
  description: 'set prefix!',
  execute(msg, args) {
	const MONGO = config.MONGO;
    if(msg.member.roles.find(r => r.name === "tester")){
	  	if (!args || args == "") {msg.channel.send("I need the new prefix");}	
	  	else{ 	
			MongoClient.connect(url, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("mydb");
			  var PREFIX = args;
			  var myquery = { prefix: /^/ };
			  var newvalues = {$set: {prefix: PREFIX} };
			  dbo.collection("config").updateMany(myquery, newvalues, function(err, res) {
			    if (err) throw err;
			    msg.channel.send(res.result.nModified + " document(s) updated");
			    return PREFIX;
			    db.close();
			  });
			});
		}
	}else{msg.channel.send("You dont have permission");}
	msg.delete();
  },
};