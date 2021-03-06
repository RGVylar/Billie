const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
  name: 'canvas',
  description: 'Shows user avatar or and other canvas stuff',
  execute: async (msg, args, options, bot) =>{
	var functions = require('../functions/functions.js');
	var color='00ffff';
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
        }
  	const channel = msg.channel;
  	if (!channel) return;
	var filters = require('../functions/filters.js');
	var fn = filters[args[0]];
	args.splice(0,1);
  	var member=msg.member;
  	var avatarIMG;
  	if (!msg.mentions.users.size) {
  		var user;
		if(msg.channel.type=='dm'){
			user = msg.author.username;
		}
		else{
			user = msg.member.user.tag;
		}
		 
		avatarIMG=msg.author.avatarURL({ dynamic: true, format: 'png', size: 512 });
		canvas(avatarIMG,channel,fn,args,color);
	}
	else{
		const avatarList = msg.mentions.users.map(user => {
		avatarIMG=user.avatarURL({ dynamic: true, format: 'png', size: 512 });
		args.splice(args.indexOf(user), 1);
		canvas(avatarIMG,channel,fn,args,color);
		}); 
	}
  },
};
async function canvas(avatarIMG,channel,fn,args) {
	const canvas = Canvas.createCanvas(512, 512);
	var ctx = canvas.getContext('2d');
	const avatar = await Canvas.loadImage(avatarIMG);
	ctx.drawImage(avatar, 0, 0, 512, 512);
	ctx.strokeStyle = 'color';
  	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	// is object a function?
	if (typeof fn === "function"){
		ctx=fn(ctx,args.join(' '),canvas);
	}
	
	const attachment = new Discord.MessageAttachment(canvas.toBuffer());
	
	channel.send(`Que coño quieres`, attachment);
}