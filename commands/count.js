const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'count',
  description: 'Counts number of content for the command',
	execute: async (msg, args,commandName) =>{
		var functions = require('../functions/functions.js');
		var commands = require('./command.js');
		let command  = args[0];
		let dice =  functions.dice();
		var col = command;
		if(col){
			if(dice==7){
			
				await functions.dio(msg,col);
			}
			else{
				await functions.count(msg,args,col);
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
								await functions.count(msg,args,col);
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