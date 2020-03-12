const Discord = require('discord.js');
module.exports = {
  name: 'cry',
  description: 'cry!',
  execute(msg, args) {
    var gifs = ["https://media.tenor.com/images/8c7d0963ce62b09bd97fea22ac5e9b17/tenor.gif",
		"https://pa1.narvii.com/6053/72c804f15039038724141a587b5dc04337dc8d9b_hq.gif",
		"https://media1.tenor.com/images/79b965bb99fd58b94d2550b384093e75/tenor.gif?itemid=13668435",
		"https://media1.tenor.com/images/98466bf4ae57b70548f19863ca7ea2b4/tenor.gif?itemid=14682297",
		"https://i.pinimg.com/originals/92/d2/d0/92d2d0d6a199add0cc40ca23f39c492b.gif",
		              "https://i.imgur.com/Y1xuiUK.gif"
		 ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Why so sad?')
	.setImage(gifs[randomIndex]);

msg.channel.send(exampleEmbed);
    //msg.channel.send({ files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    //msg.delete();
  },
};
