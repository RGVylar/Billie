const Discord = require('discord.js');
module.exports = {
  name: 'cursed',
  description: 'cursed!',
  execute(msg, args) {
    var gifs = ["https://i.imgur.com/SNQJAJ8.gif",
		  "https://i.imgur.com/scMnIjw.gif"
		 ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Lets dance!')
	.setImage(gifs[randomIndex]);

msg.channel.send(exampleEmbed);
    //msg.channel.send({ files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    msg.delete();
  },
};
