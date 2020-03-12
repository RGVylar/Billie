const Discord = require('discord.js');
module.exports = {
  name: 'hug',
  description: 'hug!',
  execute(msg, args) {
  if (!msg.mentions.users.size) {
	  
		const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`Lonely, right?`)
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
    var gifs = ["https://images-ext-1.discordapp.net/external/QYnzqF83OZ14RzVoM1t3EUw62M5x9WiIRTdwwNkVW0c/https/cdn.weeb.sh/images/HkfgF_QvW.gif",
		"https://i.pinimg.com/originals/08/de/7a/08de7ad3dcac4e10d27b2c203841a99f.gif",
		"https://media1.tenor.com/images/06658461277f7565cc769d894619e533/tenor.gif?itemid=14839202",
		"https://i.imgur.com/tuH4gqZ.gif",
		"https://pa1.narvii.com/5964/1760621601609ab2564a5bde2cc9cae0aa6ee81f_00.gif",
		"https://i.imgur.com/VgP2ONn.gif",
		"https://media1.tenor.com/images/6b198732cf054ee82d0aa166a919ceee/tenor.gif?itemid=13483047",
		"https://66.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gifv",
		"https://i.imgur.com/XEs1SWQ.gif",
		"https://i1.wp.com/2.bp.blogspot.com/-XPqck-C979s/V-QbRIOoqbI/AAAAAAAADzM/seUBJKyKCiQ5W2kScB627WjcKU5Pq1VKwCLcB/s1600/chuunibyou.gif?ssl=1",
		"https://25.media.tumblr.com/a4642f0cd5d56c054f6a0fda50a95da5/tumblr_mtonifUecT1sn2uyvo1_500.gif"
	       ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`${resa} hugs ${resb}`)
	.setImage(gifs[randomIndex]);
  
		return msg.channel.send(exampleEmbed);
	}); 
	//msg.channel.send(avatarList);
	//msg.delete();
  },
};
