const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const config = require('../config.js');
const stringtable = require('string-table');
const MONGO = config.MONGO;
const DB = config.DB;
module.exports = {
  name: 'commands',
  description: 'Shows list of commands',
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
  							var commands= require('./index');
							var local='';
							var entries= Object.entries(commands);
							var total=entries.length+result.length;
							msg.channel.send('***'+total+' total commands found (safe and lewd)***');
							msg.channel.send('***'+entries.length+' local commands***');
							entries.forEach(([key, value]) => {
								var values= Object.entries(value);
								local+='***'+PREFIX+values[0][1]+':*** `'+values[1][1]+'`\n';
									if(local.length>1900){
										msg.channel.send(local);
										local='';
								}
							});
							msg.channel.send(local);
		            		var lewd=[];
		            		var safe=[];
		       				var message='';
		       				var lewdssage='';
		       				msg.channel.send('***'+result.length+' custom commands***');
		            		result.forEach(recorrer);
		            		function recorrer(item,index){
		            			if(item.rate=='lewd'){
		            				//lewd.push(item);
		            				lewdssage+='***'+PREFIX+item.col+':*** `'+item.description+'`\n';
		            				if(lewdssage.lenght>1900){
		            					if (msg.channel.nsfw) {
		            						msg.channel.send(lewdssage);
		            						lewdssage='';
		            					}
		            				}
		            				//msg.channel.send('***\n```diff\n'+item.col+': '+item.description+'```');
		            			}
		            			else{
		            				message+='***'+PREFIX+item.col+':*** `'+item.description+'`\n';
		            				if(message.lenght>1900){
		            					msg.channel.send(message);
		            					message='';
		            				}
		            				//safe.push(item);
		            				//msg.channel.send('***\n```css\n'+item.col+': '+item.description+'```');
		            			}
							};
							msg.channel.send(message);
							if (msg.channel.nsfw) {
								msg.channel.send(lewdssage);
							}
							else{
								msg.channel.send('Avoided nsfw commands because this is not the proper channel');
							}
		            		//var tables=stringtable.create(safe,{ headers: ['col','description'],capitalizeHeaders: true ,outerBorder: PREFIX,  innerBorder: PREFIX, rowSeparator: '-'});

		            		//var tablef=stringtable.create(lewd,{ headers: ['col','description'],capitalizeHeaders: true ,outerBorder: PREFIX,  innerBorder: PREFIX, rowSeparator: '-'});

							/*msg.channel.send('***Safe commands:***\n```css\n'+tables+'```');
		            		if (msg.channel.nsfw) {
								msg.channel.send('***Lewd commands:***\n```diff\n'+tablef+'```');
							}*/
							
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
