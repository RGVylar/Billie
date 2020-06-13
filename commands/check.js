const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'check',
  description: 'Check new content for the bot',
	execute: async (msg, args,options,bot) =>{
		var id;
		var functions = require('../functions/functions.js');
		var color='00ffff';
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
        }
		if(msg.channel.type=='dm'){
			id = msg.author.id;
		}
		else{
			id = msg.member.user.id;
		}
		if(id==DEV){
			if (args.includes('-t')) {
				await functions.tcheck(msg,color);
            } 
            else{
				await functions.check(msg,color);
            }
		}
		else{
			msg.channel.send("This command is only for DEV");
		}
	},
};