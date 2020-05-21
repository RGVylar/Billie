const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
  name: 'ship',
  description: 'Create a ship pic, with name and everything, noticeme bitch, use this with me',
  execute: async (msg, args) =>{
  	const channel = msg.channel;
  	if (!channel) return;
	var functions = require('../functions/filters.js');
	var fn = functions[args[0]];
	args.splice(0,1);
  	var member=msg.member;
  	var avatarIMG;
  	if (!msg.mentions.users.size) {
		msg.channel.send('¿Que?');
	}
	else if(msg.mentions.users.size>2){
		msg.channel.send('wtf? lewd');
	}	
	else if(msg.mentions.users.size==1){
		msg.channel.send('Find someone, loser :(');
	}
	else{
		var avs=[];
		var names=[];
		const avatarList =await msg.mentions.users.map(user => {
			const usertag = user.tag;
			const n = usertag.indexOf("#");
			const  res = usertag.substring(0, n);
			avatarIMG=user.avatarURL({ dynamic: true, format: 'png', size: 256 });
			args.splice(args.indexOf(res), 1);
			avs.push(avatarIMG);
			names.push(res);
		}); 
		canvas(avs,names,channel);
	}
  },
};
async function canvas(avs,names,channel) {
	const canvas = Canvas.createCanvas(768, 256);
	var ctx = canvas.getContext('2d');
	const avatar1 = await Canvas.loadImage(avs[0]);
	const avatar2 = await Canvas.loadImage(avs[1]);
	const hearth = await Canvas.loadImage('https://discordapp.com/assets/0483f2b648dcc986d01385062052ae1c.svg');
	ctx.drawImage(avatar1, 0, 0, 256, 256);
	ctx.drawImage(hearth, 320, 100, 128, 128);
	ctx.drawImage(avatar2, 516, 0, 256, 256);
	var name=names[0].substring(names[0].lenght,names[0].length/2)+names[1].substring(names[1].length/2,names[1].lenght);
    ctx.font = 'bold 50px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'black';
    ctx.fillText(name, canvas.width / 2.7, canvas.height / 2.7);
    ctx.strokeText(name, canvas.width / 2.7, canvas.height / 2.7);
    ctx.fill();
    ctx.stroke();
	
	const attachment = new Discord.MessageAttachment(canvas.toBuffer());
	
	channel.send(`Que coño quieres`, attachment);
}