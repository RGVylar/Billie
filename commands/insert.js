const config = require("../config.js");
const DEV = config.DEV;
module.exports = {
	name: 'insert',
	description: 'set gifs!',
	execute: async (msg, args) =>{
		var functions = require('../functions/functions.js');
		var commands = require('./command.js');
		var col = args[0];
		command = await commands.commands(msg,col);
		var url = args[1];
		if(command.description){
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
		}
		else{
			msg.channel.send(`Command **`+col+`** doesn't exist`);
		}
	},
};