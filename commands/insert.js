const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'insert',
	description: 'Inserts new content in the bot, only for devs! wink wink',
	execute: async (msg, args) =>{
		if(msg.member.id==DEV){
			var functions = require('../functions/functions.js');
			var commands = require('./command.js');
			var col = args[0];
			command = await commands.commands(msg,col);
			var url = args[1];
			if(command.description){
				if (!args || args == "") {
					msg.channel.send("I need an url");
				}	
				else{
					await functions.insert(msg,col,url);
				}
			}
			else{
				//Command is not local
				MongoClient.connect(MONGO, function(err, db) {
					if (err) throw err;
					var dbo = db.db(DB);
					dbo.createCollection('commands', function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){
							var query = { col: col };
							dbo.collection('commands').find(query).toArray(async(err, result)=> {
								if (err) throw err;
								if(typeof result[0] !== 'undefined'){
									//The command is generated');
									if (!args || args == "") {
										msg.channel.send("I need an url");
									}	
									else{
										await functions.insert(msg,col,url);
									}			
								}
								else{
									//The command is not generated, check if its custom
									return false;	
								}
								db.close();
							});
						}
						else {
							msg.channel.send('This **'+commandName+'** is not defined');
						}
						db.close();
					}); 
				}); 
			}	
		}
		else{
			msg.channel.send("You dont have permission");
		}
		msg.delete();
	},
};