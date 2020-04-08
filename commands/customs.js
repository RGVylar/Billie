const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require('../config.js');
const stringtable = require('string-table');
const MONGO = config.MONGO;
const DB = config.DB;
module.exports = {
  name: 'customs',
  description: 'Shows custom commands',
  execute: async (msg, args,options, bot, PREFIX) =>{
  	MongoClient.connect(MONGO, function(err, db) {
		      	if (err) throw err;
		      	var dbo = db.db(DB);
	      		dbo.createCollection('commands', function(err, res) {
		        	if (err) {
		        	}
		        	if(typeof res !== 'undefined'){
		          		dbo.collection('commands').find({}).toArray(async(err, result)=> {
		            	if (err) throw err;
		            	if(typeof result[0] !== 'undefined'){
		            		var lewd=[];
		            		var safe=[];
		            		result.forEach(recorrer);
		            		function recorrer(item,index){
		            			if(item.rate=='lewd'){
		            				lewd.push(item);
		            			}
		            			else{
		            				safe.push(item);
		            			}
							};
		            		var tables=stringtable.create(safe,{ headers: ['col','description'],capitalizeHeaders: true ,outerBorder: PREFIX,  innerBorder: PREFIX, rowSeparator: '-'});

		            		var tablef=stringtable.create(lewd,{ headers: ['col','description'],capitalizeHeaders: true ,outerBorder: PREFIX,  innerBorder: PREFIX, rowSeparator: '-'});
							msg.channel.send('***Safe commands:***\n```css\n'+tables+'```');
		            		if (msg.channel.nsfw) {
								msg.channel.send('***Lewd commands:***\n```diff\n'+tablef+'```');
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
  },
};