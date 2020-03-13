const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  name: 'kiss',
  description: 'kiss!',
  execute(msg, args) {
	const MONGO = config.MONGO;
  	if (!msg.mentions.users.size) {
	  
		const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`Is that even posible?`)
	.setImage("https://media1.tenor.com/images/a25726b66284a8932a17e63360819f3c/tenor.gif?itemid=12015413");
  
		return msg.channel.send(exampleEmbed);
	}
	MongoClient.connect(MONGO, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("billie");
		  dbo.collection("kiss").find({}).toArray(function(err, result) {
		    if (err) throw err;
		    console.log(result);
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
		.setTitle(`${resa} kisses ${resb}`)
	.setImage(gif[0]);
  
		return msg.channel.send(exampleEmbed);
	}); 

		db.close();
		});
	});
	//msg.delete();
  },
};
