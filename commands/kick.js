const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  	name: 'kick',
  	description: 'kick someone!',
  	execute(msg, args) {
		var whitelisted = false;
		const MONGO = config.MONGO;
  		if (!msg.mentions.users.size) {
			msg.channel.send("Find someone :(");
		}
		const userlist = msg.mentions.users.map(user => {
			const usera = msg.member.user.tag;
			const userb = user.tag;
			const id = user.id;
			var whitelisted = MongoClient.connect(MONGO, function(err, db) {
			  	if (err) throw err;
			  	var dbo = db.db("billie");
			  	var query = { user: id };
			  	dbo.collection("whitelist").find(query).toArray(function(err, result) {
			    	if (err) throw err;
			    	if(typeof result[0] !== 'undefined'){
				    	if(result[0].user==id){
				    		whitelisted=true;
				    	}	
			    	}
			    	db.close();
			  	});
			});	
			MongoClient.connect(MONGO, function(err, db) {
		  		if (err) throw err;
		  		var dbo = db.db("billie");
		  		dbo.collection("kick").find({}).toArray(function(err, result) {
		    		if (err) throw err;
						if(usera==userb){
							return msg.channel.send("Find someone else :(");
						}
						else if(whitelisted){
							return msg.channel.send("Who? Someone who doesn't want to be bothered?");	
						}
						else {
							const a = usera.indexOf("#");
							const b = userb.indexOf("#");
							const  resa = usera.substring(0, a);
							const  resb = userb.substring(0, b);
						    var randomIndex = Math.floor(Math.random() * result.length); 
						    var gif = result[randomIndex].url;
						    const exampleEmbed = new Discord.RichEmbed()
							.setColor('#ffc0cb')
							.setTitle(`${resa} kicks ${resb}`)
							.setImage(gif[0]);
		  
							return msg.channel.send(exampleEmbed);
						}
					}); 
					db.close();
				});
		});
	  	
	},
};
