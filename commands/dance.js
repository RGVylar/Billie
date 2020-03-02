const Discord = require('discord.js');
module.exports = {
  name: 'sv_dance',
  description: 'dance!',
  execute(msg, args) {
    
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Lets dance!')
	.setImage('https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif')
	.setTimestamp();

msg.channel.send(exampleEmbed);
    //msg.channel.send({ files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    msg.delete();
  },
};
