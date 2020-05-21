const MongoClient = require('mongodb').MongoClient;
var request = require("request");
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
    name: 'inspire',
    description: 'inspiration command! Cringe! :3',
    execute(msg, args){
        request({
            url: "http://inspirobot.me/api?generate=true"
        },
        function(err,res,body){
            if(body.length > 0){
                msg.channel.send("", {
                    embed: {
                        "image": {
                            url: body
                        }
                    }
                });
            } else {
                msg.channel.send("No inspiration to be had :(");
            }
        });
    },
};