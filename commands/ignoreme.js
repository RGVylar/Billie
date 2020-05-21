const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DB = config.DB;
module.exports = {
	name: 'ignoreme',
	description: 'Bot will ignore you in reaction commands',
	execute(msg, args) {
		const MONGO = config.MONGO;
		const ignored = msg.member.user.id;
		var query = { user:ignored };
		MongoClient.connect(MONGO, function(err, db) {
			if (err) throw err;
			var dbo = db.db(DB);
			dbo.collection("whitelist").find(query).toArray(function(err, result) {
				if (err) throw err;
				
				if(result==''){
					if (err) throw err;
					var dbo = db.db(DB);
					dbo.collection("whitelist").insertOne(query, function(err, res) {
						if (err) throw err;
						msg.channel.send("Do you even exist?");
						db.close();
					});
				}
				else{
	      			const exampleEmbed = new Discord.MessageEmbed()
	              	.setColor('#ffff00')
	              	.setTitle(`Im already ignoring you!`)
               		.setImage('https://media1.tenor.com/images/c9c9ff2eed3dff5c3b9f7c0c033704da/tenor.gif?itemid=8657468');
	            	return msg.channel.send(exampleEmbed);
					msg.channel.send("");
				}
				db.close();
			});
		});   
	},
};