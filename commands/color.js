const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'color',
  description: 'Check new content for the bot',
	execute: async (msg, args, options, bot,PREFIX) =>{
		if(msg.channel.type=='dm'){
			msg.author.send('This command only works in servers');
		}
		else{
			const guilid=msg.guild.id;
			//const guild = bot.guilds.resolve(guilid);
			//const guild = msg.guild.id;
			//const user = guild.member(bot.user);
			//const user = msg.user.id;
			//const color = user.roles.highest.color;
			const embed = new Discord.MessageEmbed()
              .setColor(msg.member.displayHexColor)
              .setTitle('Billy`s color: '+msg.member.displayHexColor);
            msg.channel.send(embed);	
		}
	},
};
