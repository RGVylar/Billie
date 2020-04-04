module.exports = function(options) {
  console.log('function called');
  var msg = options.msg;
  var args = options.args;
  var collection = options.collection;
  var DB = options.DB;
  const MongoClient = require('mongodb').MongoClient;
  const Discord = require('discord.js');
  const config = require("../config.js");
  const MONGO = config.MONGO;
  MongoClient.connect(MONGO, function(err, db) {
    if (err) throw err;
    var dbo = db.db(DB);
    dbo.createCollection(collection, function(err, res) {
      console.log('Collection created?');
      if (err) {
      }
      if(typeof res !== 'undefined'){
        dbo.collection(collection).find({}).toArray(function(err, result) {
          console.log('query');
          if (err) throw err;
          if(typeof result[0] !== 'undefined'){
            const user = msg.member.user.tag;
            const n = user.indexOf("#");
            const  res = user.substring(0, n);
            var randomIndex = Math.floor(Math.random() * result.length); 
            var gif = result[randomIndex].url;
            const exampleEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle(`${res} is really angry`)
            .setImage(gif[0]);
            //return exampleEmbed;
            return msg.channel.send(exampleEmbed);
          }
          else{
            return "There are not angry gifs yet!";
          }
          db.close();
        });
        console.log('where am i?');
      }
      else {
        return "This angry is not defined";
      }
      db.close();
    }); 
  }); 
};