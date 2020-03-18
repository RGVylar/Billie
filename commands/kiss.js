const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  	name: 'kiss',
  	description: 'kiss!',
  	execute(msg, args) {
		var whitelisted = false;
		const MONGO = config.MONGO;
	    var dioce = Math.floor( Math.random() * 10 ) +1;
	    if(dioce==7){
	      const exampleEmbed = new Discord.RichEmbed()
	              .setColor('#ffff00')
	              .setTitle(`You were expecting a kiss anime gif, but it was me, Dio!`)
                .setImage('https://cdn.discordapp.com/attachments/682860137316220928/689793060258971750/1532018000_Tumblr_o0i5tcPs2o1s0527so1_500.gif');
	            return msg.channel.send(exampleEmbed);
	    }
		else{
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
				if (args.includes('-l')) {
	  				args.splice(args.indexOf('-l'), 1);
					MongoClient.connect(MONGO, function(err, db) {
				  		if (err) throw err;
				  		var dbo = db.db("billie");
				  		dbo.collection("lewdss").find({}).toArray(function(err, result) {
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
							.setTitle(`${resa} kisses ${resb}`)
							.setImage(gif[0]);
	  
							return msg.channel.send(exampleEmbed);
							}
						}); 
						db.close();
					});
				}	
				else{
					MongoClient.connect(MONGO, function(err, db) {
			  			if (err) throw err;
			  			var dbo = db.db("billie");
			  			dbo.collection("kiss").find({}).toArray(function(err, result) {
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
								.setTitle(`${resa} kisses ${resb}`)
								.setImage(gif[0]);
			  
								return msg.channel.send(exampleEmbed);
							}
						}); 
						db.close();
					});

				}
			});
	  	}
	},
};