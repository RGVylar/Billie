const Discord = require('discord.js');
const botCommands = require('../commands');
const config = require("../config.js");
const DEV = config.DEV;
const TOKEN = config.TOKEN;
module.exports = {
  name: 'restart',
  description: 'Restarts the bot',
  execute(msg, args, options, bot,PREFIX) {
    var id;
    if(msg.channel.type=='dm'){
      id = msg.author.id;
    }
    else{
      id = msg.member.user.id;
    }
    if(id==DEV){
      console.log(botCommands)
      msg.channel.send('Resetting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(TOKEN))
    .then(() => botCommands = require('./commands'))
      .then(() =>
      Object.keys(botCommands).map(key => {
        bot.commands.set(botCommands[key].name, botCommands[key]);
      })
      ).then(() => console.log(botCommands));
    }else{msg.channel.send("You dont have permission");}
  },
};
/*Object.keys(botCommands).map(key => {
        bot.commands.set(botCommands[key].name, botCommands[key]);
      })*/