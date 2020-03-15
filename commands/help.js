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
            const embed1 = new Discord.RichEmbed()
            .setColor('#99cc00')
            .setTitle('Commands')
            .setDescription('The list of the commands')
            .addField('sa', 'Command', true)
            .addField('cry', 'Command', true)
            .addField('cum', 'Command', true)
            .addField('dab', 'Command', true)
            .addField('say', 'Command', true)
            .addField('hug', 'Command', true)
            .addField('rps', 'Command', true)
            .addField('tea', 'Command', true)
            .addField('join', 'Command', true)
            .addField('coin', 'Command', true)
            .addField('stop', 'Command', true)
            .addField('play', 'Command', true)
            .addField('help', 'Command', true)
            .addField('ping', 'Command', true)
            .addField('turn', 'Command', true)
            .addField('suck', 'Command', true)
            .addField('dice', 'Command', true)
            .addField('date', 'Command', true)
            .addField('kick', 'Command', true)
            .addField('kiss', 'Command', true)
            .addField('nsfw', 'Command', true)
            .addField('loli', 'Command', true)
            .addField('fuck', 'Command', true)
            .addField('scum', 'Command', true)
            .addField('scry', 'Command', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            const embed2 = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands 2')
            .setDescription('The list of the commands')
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            const embed3 = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands 3')
            .setDescription('The list of the commands')
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            msg.channel.send(embed1);
            msg.channel.send(embed2);
            msg.channel.send(embed3);
          }
          else {
            const embed1 = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands')
            .setDescription('The list of the commands')
            .addField('sa', 'Command', true)
            .addField('cry', 'Command', true)
            .addField('cum', 'Command', true)
            .addField('dab', 'Command', true)
            .addField('say', 'Command', true)
            .addField('hug', 'Command', true)
            .addField('rps', 'Command', true)
            .addField('tea', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            const embed2 = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands 2')
            .setDescription('The list of the commands')
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            const embed3 = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands 2')
            .setDescription('The list of the commands')
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .addField('Command', 'Command', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            msg.channel.send(embed1);
            msg.channel.send(embed2);
            msg.channel.send(embed3);
          }
        }); 
      db.close();
    });
  },
};
