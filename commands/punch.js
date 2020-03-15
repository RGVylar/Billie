const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  	name: 'punch',
  	description: 'punch!',
  	execute(msg, args) {
		const MONGO = config.MONGO;
  		if (!msg.mentions.users.size) {
			const exampleEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle(`wtf?`)
			.setImage("https://2eu.funnyjunk.com/thumbnails/comments/My+friend+ive+spent+years+on+fj+as+a+commenter+_bdcf430bf5964aa58d3ebbd9877211a6.gif");
			return msg.channel.send(exampleEmbed);
		}	
		else{
			MongoClient.connect(MONGO, function(err, db) {
	  			if (err) throw err;
	  			var dbo = db.db("billie");
	  			dbo.collection("punch").find({}).toArray(function(err, result) {
	    			if (err) throw err;
					const userlist = msg.mentions.users.map(user => {
						const usera = msg.member.user.tag;
						const userb = user.tag;
						if(usera==userb){
							return msg.channel.send("Find someone else :(");
						}
						else {
							const a = usera.indexOf("#");
							const b = userb.indexOf("#");
							const  resa = usera.substring(0, a);
							const  resb = userb.substring(0, b);
						    var randomIndex = Math.floor(Math.random() * result.length); 
						    var gif = result[randomIndex].url;
						    const exampleEmbed = new Discord.RichEmbed()
							.setColor('#0099ff')
							.setTitle(`${resa} punches ${resb}`)
							.setImage(gif[0]);
		  
							return msg.channel.send(exampleEmbed);
						}
					}); 
					db.close();
				});
			});
		}
	  	
	},
};
