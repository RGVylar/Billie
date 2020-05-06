const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
	name: 'ignorechannel',
	execute: async (msg, args,bot) =>{
		bot.dispatcher.addInhibitor(msg => {
		  return (msg.channel.name == "blockme"); //you return whether the command should be blocked
		})
	},
};