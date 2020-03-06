const Discord = require('discord.js');
module.exports = {
  name: 'friendkiss',
  description: 'friendkiss!',
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
    var gifs = ["https://media1.tenor.com/images/ccd552765795d8791d6bc458547e9fe9/tenor.gif?itemid=14795898",
		"http://s5.favim.com/orig/141013/anime-boys-friends-gif-Favim.com-2148615.gif",
                "https://cdn.discordapp.com/attachments/683806538208378887/685552461267730557/1546195210_5122f7445ee0.gif"
                
	       ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`${resa} kisses ${resb}, just a friend`)
	.setImage(gifs[randomIndex]);
  
		return msg.channel.send(exampleEmbed);
	}); 
	//msg.channel.send(avatarList);
	msg.delete();
  },
};
