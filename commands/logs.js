const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'logs',
	description: 'Check the logs',
	execute: async (msg, args) =>{
		var id;
		if(msg.channel.type=='dm'){
			id = msg.author.id;
		}
		else{
			id = msg.member.user.id;
		}
		if(id==DEV){
			var functions = require('../functions/functions.js');
			msg.channel.send("Yes, master", {
			  files: [
			    "./logs/logs.txt"
			  ]
			});
		}
		else{
			msg.channel.send("You dont have permission");
		}
	},
};