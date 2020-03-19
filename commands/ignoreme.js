const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
const DB = config.DB;
module.exports = {
	name: 'ignoreme',
	description: 'set ignoreme!',
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
	      			const exampleEmbed = new Discord.RichEmbed()
	              	.setColor('#ffff00')
	              	.setTitle(`Im already ignoring you!`)
               		.setImage('https://cdn.discordapp.com/attachments/690295794628165707/690316862541791252/tenor_5.gif');
	            	return msg.channel.send(exampleEmbed);
					msg.channel.send("");
				}
				db.close();
			});
		});   
	},
};