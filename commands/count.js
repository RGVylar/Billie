const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'execution',
	count: async (msg, args,commandName) =>{
		var functions = require('../functions/functions.js');
		var commands = require('./command.js');
		let command;
		var argument;
		if(args.length>0){
			if (args[0].includes('-')){
				argument = args[0];
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
		if(col){
			if(dice==7){
				await functions.dio(msg,col);
			}
			else{
				await functions.query(msg,args,col);
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
		            	var query = { col: commandName };
		          		dbo.collection('commands').find(query).toArray(async(err, result)=> {
		            	if (err) throw err;
		            	if(typeof result[0] !== 'undefined'){
		            		//Command is generated
	            			col = result[0].col;
							if(dice==7){
									await functions.dio(msg,col);
							}
							else{
								await functions.query(msg,args,col);
							}	
		            	}
		            	else{
		            		//Command is not generated, check if custom
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
	},
};