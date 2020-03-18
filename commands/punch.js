const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  	name: 'punch',
  	description: 'punch someone!',
  	execute(msg, args) {
		var whitelisted = false;
		const MONGO = config.MONGO;
        var dioce = Math.floor( Math.random() * 10 ) +1;
        if(dioce==7){
          const exampleEmbed = new Discord.RichEmbed()
                .setColor('#ffff00')
                .setTitle(`You were expecting a punch anime gif, but it was me, Dio!`)
                .setImage('https://cdn.discordapp.com/attachments/687651655256375356/689757667027451919/1536245378_lYNXpYX.gif');
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
			MongoClient.connect(MONGO, function(err, db) {
		  		if (err) throw err;
		  		var dbo = db.db("billie");
		  		dbo.collection("punch").find({}).toArray(function(err, result) {
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
