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

          //Safe commands 
          const commands = new Discord.RichEmbed()
          .setColor('#99cc00')
          .setTitle('Commands')
          .setDescription('The list of commands')
          .addField('sa', 'Command', true)
          .addField('cry', 'Command', true)
          .addField('dab', 'Command', true)
          .addField('say', 'Command', true)
          .addField('hug', 'Command', true)
          .addField('rps', 'Command', true)
          .addField('tea', 'Command', true)
          .addField('coin', 'Command', true)
          .addField('help', 'Command', true)
          .addField('ping', 'Command', true)
          .addField('turn', 'Command', true)
          .addField('dice', 'Command', true)
          .addField('date', 'Command', true)
          .addField('kick', 'Command', true)
          .addField('kiss', 'Command', true)
          .addField('loli', 'Command', true)
          .addField('dance', 'Command', true)
          .addField('punch', 'Command', true)
          .addField('urban', 'Command', true)
          .addField('order', 'Command', true)
          .addField('lolito', 'Command', true)
          .addField('cursed', 'Command', true)
          .addField('attach', 'Command', true)
          .addField('avatar', 'Command', true)
          .addField('translate', 'Command', true)
          .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
          msg.channel.send(commands);

          if(msg.member.roles.find(r => r.name === "tester")){

            //ADMIN Commands
            const admin = new Discord.RichEmbed()
            .setColor('#99cc00')
            .setTitle('Admin Commands')
            .setDescription('The list of the Admin commands')
            .addField('scry', 'Command', true)
            .addField('sdab', 'Command', true)
            .addField('shug', 'Command', true)
            .addField('stea', 'Command', true)
            .addField('punch', 'Command', true)
            .addField('purge', 'Command', true)
            .addField('skiss', 'Command', true)
            .addField('skick', 'Command', true)
            .addField('sdance', 'Command', true)
            .addField('prefix', 'Command', true)
            .addField('scursed', 'Command', true)
            .addField('newcommand', 'Command', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            msg.channel.send(admin);

          }

          //Music Commands
          const music = new Discord.RichEmbed()
          .setColor('#FF0000')
          .setTitle('Music Commands')
          .setDescription('The list of Music commands')
          .addField('join', 'Command', true)
          .addField('stop', 'Command', true)
          .addField('play', 'Command', true)
          .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
          msg.channel.send(music);

          if (!msg.channel.nsfw) {  

            //NSFW Commands
            const nsfw = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands NSFW')
            .setDescription('The list of NSFW commands')
            .addField('NSFW Commands in this channel', 'Please, ask for the commands on a NSFW channel', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            msg.channel.send(nsfw);

            if(msg.member.roles.find(r => r.name === "tester")){

              //ADMIN NSFW Commands
              const adminNsfw = new Discord.RichEmbed()
              .setColor('#FF0000')
              .setTitle('Admin nsfw Commands')
              .setDescription('The list of NSFW Admin commands')
              .addField('scum', 'Command', true)
              .addField('ssuck', 'Command', true)
              .addField('sfuck', 'Command', true)
              .addField('scunni', 'Command', true)
              .addField('sundress', 'Command', true)
              .addField('smasturbate', 'Command', true)
              .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
              msg.channel.send(adminNsfw);   

            }
          }
          else {

            //NSFW Commands
            const nsfw = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands NSFW')
            .setDescription('The list of NSFW commands')
            .addField('cum', 'Command', true)
            .addField('suck', 'Command', true)
            .addField('nsfw', 'Command', true)
            .addField('fuck', 'Command', true)
            .addField('cunni', 'Command', true)
            .addField('undress', 'Command', true)
            .addField('urbansfw', 'Command', true)
            .addField('masturbate', 'Command', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');
            msg.channel.send(nsfw);   

          }
        }); 
      db.close();
    });
  },
};
