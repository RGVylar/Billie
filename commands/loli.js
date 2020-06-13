const Discord = require('discord.js');
module.exports = {
  name: 'loli',
  description: 'Lolicon content',
  execute(msg, args, options, bot) {
        var functions = require('../functions/functions.js');
        var color='00ffff';
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
        }
        var user;
		if(msg.channel.type=='dm'){
	      user = msg.author;
	      res=user.username;
	    }
	    else{
	      user= msg.member.user.tag;
	      var n = user.indexOf('#');
	      res = user.substring(0, n);
	    }
  
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor(color)
		.setTitle(`${res} is going to jail`)
		.setImage('https://thumbs.gfycat.com/GiddyBrokenHog-max-1mb.gif');
		msg.channel.send(exampleEmbed);
  },
};
