
const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DB = config.DB;
module.exports = {
  name: 'angry',
  description: 'angry!',
  execute(msg, args) {
    const MONGO = config.MONGO;
    var dioce = Math.floor( Math.random() * 20 ) +1;
    if(dioce==7){
      const exampleEmbed = new Discord.RichEmbed()
      .setColor('#ffff00')
      .setTitle(`You were expecting a angry anime gif, but it was me, Dio!`)
      .setImage('https://cdn.discordapp.com/attachments/682860137316220928/689793060258971750/1532018000_Tumblr_o0i5tcPs2o1s0527so1_500.gif');
      return msg.channel.send(exampleEmbed);
    }
    else{
      MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.createCollection("angry", function(err, res) {
          if (err) {
          }
          if(typeof res !== 'undefined'){
            dbo.collection("angry").find({}).toArray(function(err, result) {
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
                return msg.channel.send(exampleEmbed);
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
  },
};