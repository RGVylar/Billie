const Discord = require('discord.js');
module.exports = {
  name: 'kiss',
  description: 'kiss!',
  execute(msg, args) {
  if (!msg.mentions.users.size) {
	  
		const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`Is that even posible?`)
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
    var gifs = ["https://i.pinimg.com/originals/d4/dc/09/d4dc09375712a7ed678c9a317f76ad40.gif",
                "https://data.whicdn.com/images/305308438/original.gif",
                "https://media1.tenor.com/images/9b4892906aaea841c0b6cabd84f29f07/tenor.gif?itemid=13890623"
	       ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`${resa} kisses ${resb}`)
	.setImage(gifs[randomIndex]);
  
		return msg.channel.send(exampleEmbed);
	}); 
	//msg.channel.send(avatarList);
	msg.delete();
  },
};
