const Discord = require('discord.js');
module.exports = {
  name: 'dance',
  description: 'dance!',
  execute(msg, args) {
    var dances = ["https://media.discordapp.net/attachments/652434291950878721/679411326828806184/450733518339833856_12.gif",
		  "https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif",
		  "https://media.tenor.com/images/fe3826b59f80f5e6c7cc04eb474fb44d/tenor.gif",
		  "https://cdn.discordapp.com/emojis/515424732116549652.gif?v=1",
		  "https://cdn.discordapp.com/emojis/518934188800344084.gif?v=1",
		  "https://external-preview.redd.it/abIpQURl4wtDa6Y31c4RWKL7hwhgxDagpzGwFbUwMlQ.gif?s=1a81ebfe75fbadb488e6edc53e7f5d4f0b585142"
		 ];
    var randomIndex = Math.floor(Math.random() * dances.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Lets dance!')
	.setImage(dances[randomIndex]);

msg.channel.send(exampleEmbed);
    //msg.channel.send({ files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    msg.delete();
  },
};
