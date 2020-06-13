const Discord = require('discord.js');
module.exports = {
  name: 'status',
  description: 'Shows user status (or users if command come with users as args)',
  execute(msg, args, options, bot) {
	var functions = require('../functions/functions.js');
	var guilid;
	var st;
	var color='00ffff';
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
          guilid=msg.guild.id;
          st = msg.member;
        }
        else{
        	guilid=msg.author.id;
        	st=msg.author;
        }
	
	const guild = bot.guilds.resolve(guilid);
  	if (!msg.mentions.users.size) {
  		var user;
		var res;
	    if(msg.channel.type=='dm'){
	      user = msg.author;
	      res=user.username;
	    }
	    else{
	      user= msg.member.user.tag;
	      var n = user.indexOf('#');
	      res = user.substring(0, n);
	    }
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
