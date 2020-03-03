const Discord = require('discord.js');
module.exports = {
  name: 'punch',
  description: 'punch!',
  execute(msg, args) {
  if (!msg.mentions.users.size) {
	  
		const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`wtf?`)
	.setImage("https://media1.tenor.com/images/a25726b66284a8932a17e63360819f3c/tenor.gif?itemid=12015413");
  
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
	//msg.channel.send(avatarList);
	msg.delete();
  },
};
