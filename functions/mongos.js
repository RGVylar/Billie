export function query(collection, DB) {
  const MongoClient = require('mongodb').MongoClient;
  const Discord = require('discord.js');
  const config = require("../config.js");
  MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.createCollection(collection, function(err, res) {
          if (err) {
          }
          if(typeof res !== 'undefined'){
            dbo.collection(collection).find({}).toArray(function(err, result) {
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
                return exampleEmbed
              }
              else{
                msg.channel.send("There are not angry gifs yet!");
              }
              db.close();
            });
          }
          else {
            msg.channel.send("This angry is not defined");
          }
          db.close();
        }); 
      }); 
}