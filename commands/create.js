const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'create',
	description: 'create a new command!',
	execute: async (msg, args, options, bot) =>{
		var id;
		if(msg.channel.type=='dm'){
			id = msg.author.id;
		}
		else{
			id = msg.member.user.id;
		}
		if(id==DEV){
			var functions = require('../functions/functions.js');
    		var color='00ffff';
	        if(msg.channel.type!='dm'){
	          color = functions.getRoleColor(msg,bot);
	        }
			var col = args[0];
			MongoClient.connect(MONGO, function(err, db) {
				if (err) throw err;
				var dbo = db.db(DB);
				dbo.createCollection('commands', function(err, res) {
					if (err) {
					}
					//if(typeof res !== 'Collection created!'){
						var query = { col: col };
						dbo.collection('commands').find(query).toArray(async(err, result)=> {
							if (err) throw err;
							if(typeof result[0] !== 'undefined'){
								msg.channel.send('The command **'+col+'**, already exist');	            		
							}
							else{
								var command = {
									col: 'test',
									description: 'test',
									type: 'test',
									rate: 'test',
									quote: 'test',
								}
								col = args[0];
								var description = args[1];
								var type = args[2];
								var rate = args[3];
								var quote = args[4];
								description=description.replace(/_/g, " ");
								quote=quote.replace(/_/g, " ");
								command.col=col;
								command.description=description;
								command.type=type;
								command.rate=rate;
								command.quote=quote;
								console.log(command);
								await functions.newCommand(msg,command,color);
							}
							db.close();
						});
					/*}
					else {
						msg.channel.send('This **'+col+'** is not defined');
						msg.channel.send('test');
					}*/
					db.close();
				}); 
			}); 
		}
		else{
			msg.channel.send("You dont have permission");
		}
		msg.delete();
	},
};