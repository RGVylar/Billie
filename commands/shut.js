const Discord = require('discord.js');
const config = require("../config.js");
const DEV = config.DEV;
const TOKEN = config.TOKEN;
module.exports = {
  name: 'shut',
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
      msg.channel.send('shutting down...')
    .then(msg => bot.destroy())
    .then(() => process.exit());
    }else{msg.channel.send("You dont have permission");}
  },
};
/*Object.keys(botCommands).map(key => {
        bot.commands.set(botCommands[key].name, botCommands[key]);
      })*/