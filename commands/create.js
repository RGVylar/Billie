const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'create',
	description: 'create command!',
	execute: async (msg, args) =>{
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
	            		msg.channel.send(col+' exist');
	            		console.log(result);
	            	}
	            	else{
	              		msg.channel.send('There are not **'+col+'** gifs yet!');
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
						await functions.newCommand(msg,command);
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
	},
};