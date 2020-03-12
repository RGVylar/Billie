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
		  "https://cdn.discordapp.com/attachments/652432414135681060/684491470992179378/dcm6qj2-86c36880-8a11-489c-b4f5-c8bee9fd8dd7.gif",
		  "https://external-preview.redd.it/abIpQURl4wtDa6Y31c4RWKL7hwhgxDagpzGwFbUwMlQ.gif?s=1a81ebfe75fbadb488e6edc53e7f5d4f0b585142",
		  "https://i.pinimg.com/originals/04/c3/9f/04c39f437de3bda67d2dc35bbb563d88.gif",
		  "https://pa1.narvii.com/6421/0a0fcedbcfdd2f89a486bec9c6f04c502598b4f7_00.gif",
		  "https://media.giphy.com/media/11lxCeKo6cHkJy/giphy.gif",
		  "https://i.pinimg.com/originals/04/23/d0/0423d03a48980151a630d8221ce59fa3.gif",
		  "https://media1.tenor.com/images/aa9374ef547c871d4626a22d24042d1f/tenor.gif?itemid=10495378",
		  "https://media1.tenor.com/images/22a0135e7258c3c1a5d1bacfda0a8266/tenor.gif?itemid=10495372",
		  "https://media1.tenor.com/images/9ebecefff04131fa2dead785d18d24c2/tenor.gif?itemid=8151082"
		 ];
    var randomIndex = Math.floor(Math.random() * dances.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Lets dance!')
	.setImage(dances[randomIndex]);

msg.channel.send(exampleEmbed);
    //msg.channel.send({ files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    //msg.delete();
  },
};
