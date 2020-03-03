const Discord = require('discord.js');
module.exports = {
  name: 'attach',
  description: 'attach!',
  execute(msg, args) {
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');

msg.channel.send(exampleEmbed);
    msg.delete();
  },
};
