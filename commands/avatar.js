const Discord = require('discord.js');
module.exports = {
  name: 'sv_avatar',
  description: 'avatar!',
  execute(msg, args) {
  	if (!msg.mentions.users.size) {
		const user = msg.member.user.tag;
		const n = user.indexOf("#");
		const  res = user.substring(0, n);
		const exampleEmbed = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle(`${res}'s avatar`)
		.setImage(msg.author.displayAvatarURL)
		.setTimestamp();
		//msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL}>`);
		return msg.channel.send(exampleEmbed);
	}
	const avatarList = msg.mentions.users.map(user => {
		const usert = user.tag;
		const n = usert.indexOf("#");
		const  res = usert.substring(0, n);
		const exampleEmbed = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle(`${res}'s avatar`)
		.setImage(user.displayAvatarURL);
		//.setTimestamp();
		return msg.channel.send(exampleEmbed);
	}); 
	//msg.channel.send(avatarList);
	msg.delete();
  },
};
