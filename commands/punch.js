const Discord = require('discord.js');
module.exports = {
  name: 'punch',
  description: 'punch!',
  execute(msg, args) {
  if (!msg.mentions.users.size) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(`wtf?`)
	.setImage("https://static1.fjcdn.com/thumbnails/comments/+_846f2ca89d93c5ee6e6b1d06cf7e68ca.gif");
	return msg.channel.send(exampleEmbed);
	}
	const userlist = msg.mentions.users.map(user => {
		const usera = msg.member.user.tag;
		const userb = user.tag;
		const a = usera.indexOf("#");
		const b = userb.indexOf("#");
		const  resa = usera.substring(0, a);
		const  resb = userb.substring(0, b);
    var gifs = ["https://media1.tenor.com/images/ee3f2a6939a68df9563a7374f131fd96/tenor.gif?itemid=14210784",
                "https://thumbs.gfycat.com/NaturalSpicyJanenschia-size_restricted.gif",
                "https://thumbs.gfycat.com/ImperfectFrightenedFoal-size_restricted.gif",
                "https://media1.tenor.com/images/dbad11a34b4f91ea01fc88fcc5c83f51/tenor.gif?itemid=13995180",
                "https://media1.tenor.com/images/b858fbf740f162ef370ca22188d6c3ee/tenor.gif?itemid=14791113",
                "https://i.pinimg.com/originals/0f/6e/e2/0f6ee28f410e0ddce8ad1ac4ae2c9fc3.gif"
	       ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`${resa} punches ${resb}`)
	.setImage(gifs[randomIndex]);
  
		return msg.channel.send(exampleEmbed);
	}); 
	msg.delete();
  },
};
