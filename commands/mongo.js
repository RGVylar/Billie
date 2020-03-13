const mongoose = require('mongoose');
const config = require("../config.js");
module.exports = {
  name: 'mongo',
  description: 'mongo!',
  execute(msg, args) {
	const MONGO = config.MONGO;
  	mongoose.connect(MONGO, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("billie");
	  var myobj = { name: "Company Inc", address: "Highway 37" };
	  dbo.collection("billie").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    msg.channel.send("1 document inserted");
	    db.close();
	  });
	});
  },
};
