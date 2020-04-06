const Discord = require('discord.js');
module.exports = {
  name: 'loli',
  description: 'loli!',
  execute(msg, args) {
  const user = msg.member.user.tag;
		const n = user.indexOf("#");
		const  res = user.substring(0, n);
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`${res} is going to jail`)
		.setImage('https://thumbs.gfycat.com/GiddyBrokenHog-max-1mb.gif')
		.setTimestamp();
		msg.channel.send(exampleEmbed);
  },
};
