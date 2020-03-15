const Discord = require('discord.js');
const config = require("../config.js");
const MongoClient = require('mongodb').MongoClient;
module.exports = {
  name: 'help',
  description: 'list of commands',
  execute(msg, args) {
      const MONGO = config.MONGO;
      MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db("billie");
        dbo.collection("config").find({}).toArray(function(err, result) {
          if (err) throw err;
          var res = result[0].prefix;
          var PREFIX  = res[0];
          if (!msg.channel.nsfw) {      
            const embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands')
            .setDescription('The list of the commands')
            .addField('sa', 'Command')
            .addField('cry', 'Command')
            .addField('cum', 'Command')
            .addField('dab', 'Command')
            .addField('say', 'Command')
            .addField('hug', 'Command')
            .addField('rps', 'Command')
            .addField('tea', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            msg.channel.send(embed);
            embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands 2')
            .setDescription('The list of the commands')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            msg.channel.send(embed);
            embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands 2')
            .setDescription('The list of the commands')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            msg.channel.send(embed);
          }
          else {
            const embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands')
            .setDescription('The list of the commands')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .addField('Command', 'Command')
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            msg.channel.send(embed);        
          }
      }); 
      db.close();
    });
  },
};
