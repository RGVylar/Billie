const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'check',
  description: 'Check new content for the bot',
	execute: async (msg, args) =>{
		if(msg.member.id==DEV){
			var functions = require('../functions/functions.js');
			await functions.check(msg);
		}
		else{
			msg.channel.send("You dont have permission");
		}
	},
};