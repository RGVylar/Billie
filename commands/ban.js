const Discord = require('discord.js');
const config = require("../config.js");
const DEV = config.DEV;
module.exports = {
  name: 'ban',
  description: 'Bans user, you must write a reason',
  execute(msg, args) {
    if(msg.member.id==DEV||msg.guild.owner){
      let user = msg.mentions.users.first();
        let razon = args.slice(1).join(' ');
    
        if (msg.mentions.users.size < 1) return msg.reply('Find someone').catch(console.error);
        if(!razon) return msg.channel.send('Reason, `-ban @username [reason]`');
        if (!msg.guild.member(user).bannable) return msg.reply('I cant ban him/her.');
        
    
        msg.guild.member(user).ban(razon);
        msg.channel.send(`**${user.username}**, was banned, reason: ${razon}.`);
    }else{msg.channel.send("You dont have permission");}
    msg.delete();
  },
};