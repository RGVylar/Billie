const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  name: 'cum',
  description: 'cum things!',
  execute(msg, args) {
	const MONGO = config.MONGO;
	if (!msg.channel.nsfw) {
        const nsfwWrongChannelWarn = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('You lewd !')
            .setDescription('You need to be in a nsfw channel for that Baa~ Baka')
            .setImage("https://media1.tenor.com/images/8674cfb928b1055dd6b8227e7e61060b/tenor.gif?itemid=7979947");

        msg.channel.send(nsfwWrongChannelWarn);
    } else {
	  	if (!msg.mentions.users.size) {
			msg.channel.send("Find someone :(");
		}	
		else{
				console.log(msg.mentinos.users);
				MongoClient.connect(MONGO, function(err, db) {
			  		if (err) throw err;
			  		var dbo = db.db("billie");
			  		dbo.collection("cum").find({}).toArray(function(err, result) {
			    		if (err) throw err;
						const userlist = msg.mentions.users.map(user => {
							const usera = msg.member.user.tag;
							const userb = user.tag;
							const a = usera.indexOf("#");
							const b = userb.indexOf("#");
							const  resa = usera.substring(0, a);
							const  resb = userb.substring(0, b);
						    var randomIndex = Math.floor(Math.random() * result.length); 
						    var gif = result[randomIndex].url;
						    const exampleEmbed = new Discord.RichEmbed()
							.setColor('#0099ff')
							.setTitle(`${resa} cums into ${resb}`)
							.setImage(gif[0]);
		  
							return msg.channel.send(exampleEmbed);
						}); 
						db.close();
					});
				});
			}
	  	}
	},
};