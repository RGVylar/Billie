const Discord = require('discord.js');
module.exports = {
  name: 'avatar',
  description: 'Shows user avatar (or users if command come with users as args)',
  execute(msg, args) {
  	if (!msg.mentions.users.size) {
		const user = msg.member.user.tag;
		const n = user.indexOf("#");
		const  res = user.substring(0, n);
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`${res}'s avatar`)
		.setImage(msg.author.avatarURL({ dynamic: true, format: 'png', size: 512 }));
		return msg.channel.send(exampleEmbed);
	}
	const avatarList = msg.mentions.users.map(user => {
		const usert = user.tag;
		const n = usert.indexOf("#");
		const  res = usert.substring(0, n);
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`${res}'s avatar`)
		.setImage(user.avatarURL({ dynamic: true, format: 'png', size: 512 }));
		return msg.channel.send(exampleEmbed);
	}); 
	//msg.channel.send(avatarList);
	//msg.delete();
  },
};
