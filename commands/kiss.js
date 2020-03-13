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
    /*var gifs = ["https://i.pinimg.com/originals/d4/dc/09/d4dc09375712a7ed678c9a317f76ad40.gif",
                "https://data.whicdn.com/images/305308438/original.gif",
                "https://media1.tenor.com/images/9b4892906aaea841c0b6cabd84f29f07/tenor.gif?itemid=13890623",
		"https://iforo.3djuegos.com/files_foros/15/15pj_play.gif",
		"https://i.pinimg.com/originals/5e/db/97/5edb9777072d901af6c294f9d1ba30ac.gif",
		"https://wethehunted.files.wordpress.com/2015/11/katanagatari-kiss.gif"
	       ];*/
    var randomIndex = Math.floor(Math.random() * result.length); 
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
		.setTitle(`${resa} kisses ${resb}`)
	.setImage(result[randomIndex].url);
  
		return msg.channel.send(exampleEmbed);
	}); 

		db.close();
		});
	});
	//msg.channel.send(avatarList);
	//msg.delete();
  },
};
