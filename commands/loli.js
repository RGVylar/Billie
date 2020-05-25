const Discord = require('discord.js');
module.exports = {
  name: 'loli',
  description: 'Lolicon content',
  execute(msg, args, options, bot) {
        var functions = require('../functions/functions.js');
        var color = functions.getRoleColor(msg,bot);
  const user = msg.member.user.tag;
		const n = user.indexOf("#");
		const  res = user.substring(0, n);
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor(color)
		.setTitle(`${res} is going to jail`)
		.setImage('https://thumbs.gfycat.com/GiddyBrokenHog-max-1mb.gif')
		.setTimestamp();
		msg.channel.send(exampleEmbed);
  },
};
