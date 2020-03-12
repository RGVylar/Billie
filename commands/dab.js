const Discord = require('discord.js');
module.exports = {
  name: 'dab',
  description: 'dab!',
  execute(msg, args) {
    var gifs = ["https://media1.tenor.com/images/59983e51f744411fd00c2e50b1399fc5/tenor.gif?itemid=12789689"
		 ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Dab on them haters')
	.setImage(gifs[randomIndex]);

msg.channel.send(exampleEmbed);
    //msg.channel.send({ files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    //msg.delete();
  },
};
