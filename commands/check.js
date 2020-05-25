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
		if(msg.member.id==DEV){
			var functions = require('../functions/functions.js');
			var color = functions.getRoleColor(msg,bot);
			if (args.includes('-t')) {
				await functions.tcheck(msg,color);
            } 
            else{
				await functions.check(msg,color);
            }
		}
		else{
			msg.channel.send("You dont have permission");
		}
	},
};