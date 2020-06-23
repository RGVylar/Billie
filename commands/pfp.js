const Discord = require('discord.js');
module.exports = {
  name: 'pfp',
  description: 'Shows user avatar (or users if command come with users as args)',
  execute(msg, args, options, bot) {
	var functions = require('../functions/functions.js');
	var color='00ffff';
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
        }
  	if (!msg.mentions.users.size) {
		var user;
		var res;
	    if(msg.channel.type=='dm'){
	      user = msg.author;
	      res=user.username;
	    }
	    else{
	      user= msg.member.user.tag;
	      var n = user.indexOf('#');
	      res = user.substring(0, n);
	    }
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor(color)
		.setTitle(`${res}'s avatar`)
		.setImage(msg.author.avatarURL({ dynamic: true, format: 'png', size: 512 }));
		return msg.channel.send(exampleEmbed);
	}
	const avatarList = msg.mentions.users.map(user => {
		const usert = user.tag;
		const n = usert.indexOf("#");
		const  res = usert.substring(0, n);
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor(color)
		.setTitle(`${res}'s avatar`)
		.setImage(user.avatarURL({ dynamic: true, format: 'png', size: 512 }));
		return msg.channel.send(exampleEmbed);
	}); 
	//msg.channel.send(avatarList);
	//msg.delete();
  },
};
