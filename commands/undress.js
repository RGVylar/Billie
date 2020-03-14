const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
    name: 'undress',
    description: 'undress!',
    execute(msg, args) {
    const MONGO = config.MONGO;
  if (!msg.channel.nsfw) {
        const nsfwWrongChannelWarn = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('You lewd !')
            .setDescription('You need to be in a nsfw channel for that Baa~ Baka')
            .setImage("https://media1.tenor.com/images/8674cfb928b1055dd6b8227e7e61060b/tenor.gif?itemid=7979947");

        msg.channel.send(nsfwWrongChannelWarn);
    } else {
      MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db("billie");
        dbo.collection("undress").find({}).toArray(function(err, result) {
              if (err) throw err;
            const user = msg.member.user.tag;
            const n = user.indexOf("#");
            const  res = user.substring(0, n);
              var randomIndex = Math.floor(Math.random() * result.length); 
              var gif = result[randomIndex].url;
              const exampleEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle(`${res} undresses`)
            .setImage(gif[0]);
          return msg.channel.send(exampleEmbed);
        }); 
        db.close();
      });
    }
  },
};
