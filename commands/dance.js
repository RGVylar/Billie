const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  	name: 'dance',
  	description: 'dance!',
  	execute(msg, args) {
		MongoClient.connect(MONGO, function(err, db) {
			if (err) throw err;
			var dbo = db.db("billie");
			dbo.collection("dance").find({}).toArray(function(err, result) {
			    	if (err) throw err;
					const user = msg.member.user.tag;
					const n = user.indexOf("#");
					const  res = user.substring(0, n);
				    var randomIndex = Math.floor(Math.random() * result.length); 
				    var gif = result[randomIndex].url;
				    const exampleEmbed = new Discord.RichEmbed()
					.setColor('#0099ff')
					.setTitle(`${res} dances`)
					.setImage(gif[0]);
				return msg.channel.send(exampleEmbed);
			}); 
			db.close();
		});
  	},
};
