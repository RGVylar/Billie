const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');
const types = ['top'];
module.exports = {
  name: 'urbansfw',
  description: 'Search on urbandictionary but better!',
  async execute(msg, args, options, bot)  {const word = args.join(" ")
  try {
        var functions = require('../functions/functions.js');
        var color='00ffff';
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
        }
    const { body } = await snekfetch
      .get('http://api.urbandictionary.com/v0/define')
      .query({ term: word });
    if (!body.list.length) return msg.channel.send('Could not find any results.');
    const data = body.list[types === 'top' ? 0 : Math.floor(Math.random() * body.list.length)];
    const embed = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor('Urban Dictionary', 'https://i.imgur.com/Fo0nRTe.png', 'https://www.urbandictionary.com/')
      .setURL(data.permalink)
      .setTitle(data.word)
      .setDescription((data.definition))
      .addField('Example', data.example);
    const filtercheck = ["xxx", "porn", "sex", "18+","nsfw", "hentai", "dick", "vagina", "pussy"]
    //if (filtercheck.some(word2 => data.definition.toLowerCase().includes(word2))) return msg.channel.send("Not allowed to search nsfw content.");
    if (filtercheck.some(word3 => data.word.toLowerCase().includes(word3))) return msg.channel.send("Not allowed to search nsfw content.");
    msg.channel.send(embed);
  } catch (err) {
    return msg.channel.send(`Oh no, an error occurred: \`${err.msg}\`. Try again later!`);
  }
    //msg.delete();
  },
};
