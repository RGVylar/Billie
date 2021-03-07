const Discord = require('discord.js');
const config = require("../config.js");
const DEV = config.DEV;
module.exports = {
  name: 'billieav',
  description: 'Changes Billie`s avatar',
  execute(msg, args,options,bot) {
    if(msg.member.id==DEV||msg.guild.owner){
      var url = args[0];
      console.log(url);
      bot.user.setAvatar(url);
    }else{msg.channel.send("You dont have permission");}
    msg.delete();
  },
};