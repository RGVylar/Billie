module.exports = {
  name: 'sv_avatar',
  description: 'avatar!',
  execute(msg, args) {
  	if (!msg.mentions.users.size) {
		const exampleEmbed = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle('Lets dance!')
		.setImage('${msg.author.displayAvatarURL}')
		.setTimestamp();
		//msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL}>`);
		return msg.channel.send(exampleEmbed);
	}
	const avatarList = msg.mentions.users.map(user => {
		return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
	}); 
	msg.channel.send(avatarList);
	msg.delete();
  },
};
