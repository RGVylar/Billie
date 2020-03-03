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
    var gifs = ["https://images-ext-1.discordapp.net/external/QYnzqF83OZ14RzVoM1t3EUw62M5x9WiIRTdwwNkVW0c/https/cdn.weeb.sh/images/HkfgF_QvW.gif",
		"https://i.pinimg.com/originals/08/de/7a/08de7ad3dcac4e10d27b2c203841a99f.gif",
		"https://media1.tenor.com/images/06658461277f7565cc769d894619e533/tenor.gif?itemid=14839202",
		"https://i.imgur.com/tuH4gqZ.gif",
		"https://pa1.narvii.com/5964/1760621601609ab2564a5bde2cc9cae0aa6ee81f_00.gif"
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
