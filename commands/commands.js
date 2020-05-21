const Discord = require('discord.js');
var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const config = require('../config.js');
const stringtable = require('string-table');
const MONGO = config.MONGO;
const DB = config.DB;
var files = fs.readdirSync('commands');
module.exports = {
  name: 'commands',
  description: 'Shows local commands',
  execute: async (msg, args,options, bot, PREFIX) =>{
  	var commands= require('./index');
	var message='';
	var entries= Object.entries(commands);
	msg.channel.send('***'+entries.length+' local commands found (safe and lewd)***');
	entries.forEach(([key, value]) => {
		var values= Object.entries(value);
		message+='***'+PREFIX+values[0][1]+':*** `'+values[1][1]+'`\n';
			if(message.length>1900){
				msg.channel.send(message);
				message='';
		}
	});
	msg.channel.send(message);		
  },
};
