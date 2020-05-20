const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
var leet = require("leet");
module.exports = {
    name: 'leet',
    description: 'leet command!',
    execute(msg, args){
        msg.channel.send(leet.convert(args.join(" ")));
    },
};