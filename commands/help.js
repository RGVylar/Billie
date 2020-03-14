var fs = require('fs');
const config = require("../config.js");
const MongoClient = require('mongodb').MongoClient;
module.exports = {
  name: 'help',
  description: 'list of commands',
  execute(msg, args) {
    var files = fs.readdirSync('./commands');
    var i;
    var PREFIX;
    for (i = 0; i < files.length; i++) {
      var n = files[i].indexOf('.');
      const MONGO = config.MONGO;
      MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db("billie");
        dbo.collection("config").find({}).toArray(function(err, result) {
          if (err) throw err;
          var res = result[0].prefix;
          PREFIX  = res[0];
        }); 
        db.close();
      });
      files[i] =  '- ' + PREFIX + files[i].substring(0, n);
    }
    msg.channel.send('```fix\nCommands =\n'+files.join("\n")+'```');
  },
};
