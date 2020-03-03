const Discord = require('discord.js');
module.exports = {
  name: 'cry',
  description: 'cry!',
  execute(msg, args) {
    var gifs = ["https://tenor.com/view/anime-rain-let-it-rain-monogatari-series-koyomi-araragi-gif-16422239",
		              "https://imgur.com/Y1xuiUK"
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
