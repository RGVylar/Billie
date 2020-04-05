const Discord = require('discord.js');
module.exports = {
  name: 'sauce',
  description: 'sauce!',
  execute: async (msg, args) =>{
    var functions = require('../functions/functions.js');
    if (!msg.channel.nsfw) {
        await functions.lewd(msg);
    } 
    else {
        if (!args || args == "") {
    		msg.reply('But, give me the holy numbers!');
        }
        else {
    		msg.reply('https://nhentai.net/g/' + args + '/');       	
        }
    }
  },
};
