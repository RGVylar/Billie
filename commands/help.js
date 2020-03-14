var fs = require('fs');
const config = require("../config.js");
const MongoClient = require('mongodb').MongoClient;
module.exports = {
  name: 'help',
  description: 'list of commands',
  execute(msg, args) {
    var files = fs.readdirSync('./commands');
    var i;
    for (i = 0; i < files.length; i++) {
      var n = files[i].indexOf('.');
      files[i]=files[i].substring(0, n);
      if(files[i]!='fuck'&&files[i]!='sfuck'&&files[i]!='index'&&files[i]!='masturbate'&&files[i]!='smasturbate'){
        files[i] ='- ' + files[i]
      }
    }
    const MONGO = config.MONGO;
      MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db("billie");
        dbo.collection("config").find({}).toArray(function(err, result) {
          if (err) throw err;
          var res = result[0].prefix;
          var PREFIX  = res[0];
          msg.channel.send('The prefix right now is `'+PREFIX+'`');
        }); 
        db.close();
      });
    msg.channel.send('```fix\nCommands =\n'+files.join("\n")+'```');
  },
};
