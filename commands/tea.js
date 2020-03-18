const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
    name: 'tea',
    description: 'tea!',
    execute(msg, args) {
    const MONGO = config.MONGO;
        var dioce = Math.floor( Math.random() * 10 ) +1;
        if(dioce==7){
          const exampleEmbed = new Discord.RichEmbed()
                .setColor('#ffff00')
                .setTitle(`You were expecting a tea anime gif, but it was me, Dio!`)
                .setImage('https://cdn.discordapp.com/attachments/687651655256375356/689757667027451919/1536245378_lYNXpYX.gif');
              return msg.channel.send(exampleEmbed);
        }
      else{
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db("billie");
      dbo.collection("tea").find({}).toArray(function(err, result) {
            if (err) throw err;
          const user = msg.member.user.tag;
          const n = user.indexOf("#");
          const  res = user.substring(0, n);
            var randomIndex = Math.floor(Math.random() * result.length); 
            var gif = result[randomIndex].url;
            const exampleEmbed = new Discord.RichEmbed()
          .setColor('#0099ff')
          .setTitle(`${res}, Its tea time!`)
          .setImage(gif[0]);
        return msg.channel.send(exampleEmbed);
      }); 
      db.close();
    });
    }
    },
};
