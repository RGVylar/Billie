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
			MongoClient.connect(url, function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("mydb");
			  var myquery = { prefix: /^/ };
			  var newvalues = {$set: {prefix: args} };
			  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
			    if (err) throw err;
			    msg.channel.send(res.result.nModified + " document(s) updated");
			    db.close();
			  });
			});
		}
	}else{msg.channel.send("You dont have permission");}
	msg.delete();
  },
};