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
      var collection = "angry"
      let exampleEmbed = require("../functions/mongo.js")(msg,args,collection,DB);
      msg.channel.send(exampleEmbed);
    }  
  },
};
