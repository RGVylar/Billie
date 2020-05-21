const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
  name: 'canvas',
  description: 'Shows user avatar or and other canvas stuff',
  execute: async (msg, args) =>{
  	const channel = msg.channel;
  	if (!channel) return;
	var functions = require('../functions/filters.js');
	var fn = functions[args[0]];
	args.splice(0,1);
  	var member=msg.member;
  	var avatarIMG;
  	if (!msg.mentions.users.size) {
		const user = msg.member.user.tag;
		avatarIMG=msg.author.avatarURL({ dynamic: true, format: 'png', size: 512 });
		canvas(avatarIMG,channel,fn,args);
	}
	else{
		const avatarList = msg.mentions.users.map(user => {
		avatarIMG=user.avatarURL({ dynamic: true, format: 'png', size: 512 });
		args.splice(args.indexOf(user), 1);
		canvas(avatarIMG,channel,fn,args);
		}); 
	}
  },
};
async function canvas(avatarIMG,channel,fn,args) {
	const canvas = Canvas.createCanvas(512, 512);
	var ctx = canvas.getContext('2d');
	const avatar = await Canvas.loadImage(avatarIMG);
	ctx.drawImage(avatar, 0, 0, 512, 512);
	ctx.strokeStyle = '#74037b';
  	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	// is object a function?
	if (typeof fn === "function"){
		ctx=fn(ctx,args.join(' '),canvas);
	}
	
	const attachment = new Discord.MessageAttachment(canvas.toBuffer());
	
	channel.send(`Que coño quieres`, attachment);
}