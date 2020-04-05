module.exports = {
	name: 'execution',
	execute: async (msg, args,commandName) =>{
		var functions = require('../functions/functions.js');
		var commands = require('./command.js');
		let command;
		if(args.length>0){
			if (args[0].includes('-')){
				var argument = args[0];
				command = await commands.commands(msg,commandName,argument);
			}
			else{
				command = await commands.commands(msg,commandName);
			}	
		}
		else{
			command = await commands.commands(msg,commandName);
		}
		let dice =  functions.dice();
		var col = command.col;
		var type = command.type;
		var rate = command.rate;
		var user = functions.oneUser(msg);
		var param0 = user+' '+command.param0;
		if(col){
			if (rate=='lewd'&&!msg.channel.nsfw) {
				await functions.lewd(msg);
			}
			else{
				if(dice==7){
					await functions.dio(msg,col);
				}
				else{
					if(type=='query'){
						await functions.query(msg,args,col,param0);
					}
					else{
						if (!msg.mentions.users.size) {
							msg.channel.send("Find someone :(");
						}	
						else{
							await functions.multiquery(msg,args,col,param0);
						}	
					}
				}	
			}
		}
		else{
			return false;
		}
	},
};