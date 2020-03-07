const Discord = require('discord.js');
module.exports = {
  name: 'cursed',
  description: 'cursed!',
  execute(msg, args) {
    var gifs = ["https://i.imgur.com/SNQJAJ8.gif",
		  "https://i.imgur.com/scMnIjw.gif",
		"https://cdn.discordapp.com/attachments/676411282827771983/685888004010672138/static-assets-upload10326742311906306314.gif",
		"https://i.pinimg.com/originals/ec/77/33/ec7733e71c0456fef60986295778f7be.gif",
		"https://media.discordapp.net/attachments/676411282827771983/685256522569220148/1544006555_anime-smug-face-gif-10.gif",
		"https://thumbs.gfycat.com/WeakImperfectCapeghostfrog-size_restricted.gif",
		"https://i.pinimg.com/originals/65/45/45/654545a849ea191161e74190b2d720b4.gif",
		"https://i.pinimg.com/originals/30/a6/5e/30a65e38004afc5c02be189cf17b2f1f.gif",
		"https://i.pinimg.com/originals/35/1c/8a/351c8a0fbabdc2196e3e1542e5335c2f.gif",
		"https://i.pinimg.com/originals/e1/5f/46/e15f464216a5d2d6cdf37c6c3e596036.gif",
		"https://media1.tenor.com/images/567a03b4c9f4572b58b479c13ef854b6/tenor.gif?itemid=15620009",
		"https://2eu.funnyjunk.com/gifs/I_f82256_6524944.gif",
		"https://orig00.deviantart.net/d29a/f/2018/249/a/0/lug_s_pec_bounce_medium_by_anhesart-dcm75qy.gif"
		 ];
    var randomIndex = Math.floor(Math.random() * gifs.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('This is cursed!')
	.setImage(gifs[randomIndex]);

msg.channel.send(exampleEmbed);
    //msg.channel.send({ files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    msg.delete();
  },
};
