const Discord = require('discord.js');
module.exports = {
  name: 'tea',
  description: 'tea!',
  execute(msg, args) {
    var gifs = ["https://cdn.discordapp.com/emojis/557418528035307530.gif?v=1"
		 ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Its tea time!')
	.setImage(gifs[randomIndex]);

msg.channel.send(exampleEmbed);
    msg.delete();
  },
};
