const Discord = require('discord.js');
module.exports = {
  name: 'status',
  description: 'Shows user status (or users if command come with users as args)',
  execute(msg, args, options, bot) {
	var functions = require('../functions/functions.js');
	var color = functions.getRoleColor(msg,bot);
	const guilid=msg.guild.id;
	const guild = bot.guilds.resolve(guilid);
  	if (!msg.mentions.users.size) {
		const user = msg.member.user.tag;
		const n = user.indexOf("#");
		const  res = user.substring(0, n);
		const st = msg.member;
		console.log(st.presence.activities[0]);
		if(st.presence.activities[0]==undefined){
			msg.channel.send(`${res} no status`)
		}
		else{
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor(color)
		.setTitle(`${res}'s status`)
        .setDescription(st.presence.activities[0].state);
		return msg.channel.send(exampleEmbed);
		}
	}
	const avatarList = msg.mentions.users.map(user => {
		const usert = user.tag;
		const n = usert.indexOf("#");
		const  res = usert.substring(0, n);
		const st = guild.member(user);
		if(st.presence.activities[0]==undefined){
			msg.channel.send(`${res} no status`)
		}
		else{
			const exampleEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setTitle(`${res}'s status`)
	        .setDescription(st.presence.activities[0].state)
	        .setFooter(user.presence.status);
			return msg.channel.send(exampleEmbed);
		}
	}); 
  },
};
