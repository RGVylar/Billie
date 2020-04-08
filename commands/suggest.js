const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'suggest',
	description: 'suggest gifs!',
	execute: async (msg, args) =>{
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
					MongoClient.connect(MONGO, function(err, db) {
					if (err) throw err;
					var dbo = db.db(DB);
					
						
						
							var query = { url: url };
							dbo.collection('media').find(query).toArray(async(err, result)=> {
								if (err) throw err;
								if(typeof result[0] !== 'undefined'){
									//The command is generated');
									msg.channel.send('Already accepted');	
								}
								else{
									//The command is not generated, check if its custom
									
									if (!args || args == "") {
										msg.channel.send("I need an url");
									}	
									else{
										await functions.suggest(msg,col,url);
									}	
									return false;	
								}
								db.close();
							});
						db.close(); 
				}); 
				}
			}
			else{
				MongoClient.connect(MONGO, function(err, db) {
					if (err) throw err;
					var dbo = db.db(DB);
					dbo.createCollection('commands', function(err, res) {
						if (err) {
						}
						if(typeof res !== 'undefined'){
							var query = { url: url };
							dbo.collection('media').find(query).toArray(async(err, result)=> {
								if (err) throw err;
								if(typeof result[0] !== 'undefined'){
									//The command is generated');
									msg.channel.send('Already accepted');	
								}
								else{
									//The command is not generated, check if its custom
									
									if (!args || args == "") {
										msg.channel.send("I need an url");
									}	
									else{
										await functions.suggest(msg,col,url);
									}	
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
		
		//msg.delete();
	},
};