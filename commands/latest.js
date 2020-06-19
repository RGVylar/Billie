const Discord = require('discord.js');
module.exports = {
  name: 'latest',
  description: 'latest changes feed',
  execute(msg, args, options, bot) {
	var functions = require('../functions/functions.js');
	var color='00ffff';
    if(msg.channel.type!='dm'){
      color = functions.getRoleColor(msg,bot);
    }
    const exampleEmbed = new Discord.MessageEmbed()
          .setColor(color)
          .setTitle('Latest update:')
          .addField('Latest Command:', 'Now you can use this command, but I bet you already now it')
          .addField('DM Commands:', 'Now you can user the commands in the dms')
          .addField('Purge command:', 'Now server owner can use purge command')
          .addField('Ban command:', 'Now server owner can use ban command')
          .addField('Restart command', 'Now i can restart bot from commands')
          .addField('Help command', 'Fixed this command, now shows all the commands correctly')
          .setFooter('Date: 13/06/2020');
    return msg.channel.send(exampleEmbed);
  },
};