const config = require("../config.js");
const DEV = config.DEV;
module.exports = {
	name: 'insert',
	description: 'set gifs!',
	execute: async (msg, args) =>{
		var functions = require('../functions/functions.js');
		if(args.lenght)
		var col = args[0];
		var url = args[1];
		if(msg.member.id==DEV){
			if (!args || args == "") {
				msg.channel.send("I need an url");
			}	
			else{
				await functions.insert(msg,url,col);
			}
		}
		else{
			msg.channel.send("You dont have permission");
		}
		msg.delete();
	},
};