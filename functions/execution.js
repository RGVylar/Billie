module.exports = {
  name: 'execution',
	execute: async (msg, args,name) =>{
		var functions = require('../functions/functions.js');
		msg.channel.send(args);
		let dice =  functions.dice();
		let test = await functions.test;
		var param0 = 'kicks';
		var col = 'kick';
		if(dice==7){
			await functions.dio(msg,col);
		}
		else{
			if (!msg.mentions.users.size) {
				msg.channel.send("Find someone :(");
			}	
			else{
				await functions.multiquery(msg,args,col,param0);
			}
		}
	},
};