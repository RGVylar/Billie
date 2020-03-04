const Discord = require('discord.js');
module.exports = {
  name: 'kick',
  description: 'kick!',
  execute(msg, args) {
  if (!msg.mentions.users.size) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(`wtf?`)
	.setImage("https://2eu.funnyjunk.com/thumbnails/comments/My+friend+ive+spent+years+on+fj+as+a+commenter+_bdcf430bf5964aa58d3ebbd9877211a6.gif");
	return msg.channel.send(exampleEmbed);
	}
	const userlist = msg.mentions.users.map(user => {
		const usera = msg.member.user.tag;
		const userb = user.tag;
		const a = usera.indexOf("#");
		const b = userb.indexOf("#");
		const  resa = usera.substring(0, a);
		const  resb = userb.substring(0, b);
    var gifs = ["https://gifimage.net/wp-content/uploads/2017/09/anime-sick-gif-14.gif"
	       ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`${resa} kicks ${resb}`)
	.setImage(gifs[randomIndex]);
  
		return msg.channel.send(exampleEmbed);
	}); 
	msg.delete();
  },
};
