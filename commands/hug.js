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
    var gifs = ["https://images-ext-1.discordapp.net/external/QYnzqF83OZ14RzVoM1t3EUw62M5x9WiIRTdwwNkVW0c/https/cdn.weeb.sh/images/HkfgF_QvW.gif"
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
