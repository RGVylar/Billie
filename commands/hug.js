const Discord = require('discord.js');
module.exports = {
  name: 'hug',
  description: 'hug!',
  execute(msg, args) {
  if (!msg.mentions.users.size) {
		return msg.channel.send("SAD");
	}
	const userlist = msg.mentions.users.map(user => {
		const usera = msg.member.user.tag;
		const userb = user.tag;
		const a = usera.indexOf("#");
		const b = userb.indexOf("#");
		const  resa = usera.substring(0, a);
		const  resb = userb.substring(0, b);
    var gifs = ["https://i.imgur.com/SNQJAJ8.gif",
		  "https://i.imgur.com/scMnIjw.gif"
		 ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`${resa} hugs ${resb}`)
	.setImage(gifs[randomIndex]);
  
		return msg.channel.send(exampleEmbed);
	}); 
	//msg.channel.send(avatarList);
	msg.delete();
  },
};
