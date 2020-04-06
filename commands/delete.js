const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'delete',
	description: 'delete command!',
	execute: async (msg, args) =>{
		if(msg.member.id==DEV){
			var functions = require('../functions/functions.js');
			var col = args[0];
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
								await functions.delCommand(msg,col);		            		
							}
							else{
								msg.channel.send('The command **'+col+'**, dont exist');
							}
							db.close();
						});
					}
					else {
						msg.channel.send('This **'+col+'** is not defined');
					}
					db.close();
				}); 
			}); 
		}
		else{
			msg.channel.send("You dont have permission");
		}
		//msg.delete();
	},
};