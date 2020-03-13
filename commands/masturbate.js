const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  name: 'masturbate',
  description: 'masturbate!',
  execute(msg, args) {
	const MONGO = config.MONGO;
  	if (!msg.mentions.users.size) {
		MongoClient.connect(MONGO, function(err, db) {
		  	if (err) throw err;
		  	var dbo = db.db("billie");
		  	dbo.collection("multibate").find({}).toArray(function(err, result) {
		    	if (err) throw err;
				const userlist = msg.mentions.users.map(user => {
					const usera = msg.member.user.tag;
					const a = usera.indexOf("#");
					const  resa = usera.substring(0, a);
				    var randomIndex = Math.floor(Math.random() * result.length); 
				    var gif = result[randomIndex].url
				    const exampleEmbed = new Discord.RichEmbed()
					.setColor('#0099ff')
					.setTitle(`${resa} masturbates`)
					.setImage(gif[0]);
	  
					return msg.channel.send(exampleEmbed);
				}); 
				db.close();
			});
			return msg.channel.send(exampleEmbed);
			});
		}	
		else{
			MongoClient.connect(MONGO, function(err, db) {
		  		if (err) throw err;
		  		var dbo = db.db("billie");
		  		dbo.collection("masturbate").find({}).toArray(function(err, result) {
		    		if (err) throw err;
					const userlist = msg.mentions.users.map(user => {
						const usera = msg.member.user.tag;
						const userb = user.tag;
						const a = usera.indexOf("#");
						const b = userb.indexOf("#");
						const  resa = usera.substring(0, a);
						const  resb = userb.substring(0, b);
					    var randomIndex = Math.floor(Math.random() * result.length); 
					    var gif = result[randomIndex].url
					    const exampleEmbed = new Discord.RichEmbed()
						.setColor('#0099ff')
							.setTitle(`${resa} masturbates ${resb}`)
						.setImage(gif[0]);
	  
						return msg.channel.send(exampleEmbed);
					}); 
					db.close();
				});
			});
		}
  	},
};
