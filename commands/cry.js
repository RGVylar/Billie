const Discord = require('discord.js');
module.exports = {
  name: 'cry',
  description: 'cry!',
  execute(msg, args) {
    var gifs = ["https://media.tenor.com/images/8c7d0963ce62b09bd97fea22ac5e9b17/tenor.gif",
		              "https://i.imgur.com/Y1xuiUK.gif"
		 ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Why so sad?')
	.setImage(gifs[randomIndex]);

msg.channel.send(exampleEmbed);
    //msg.channel.send({ files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    msg.delete();
  },
};
