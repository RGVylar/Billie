const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
var cleverbot = require("cleverbot-node");
module.exports = {
    name: 'clever',
    description: 'This doesnt work yet :(',
    execute(msg, args, options, bot){
    var functions = require('../functions/functions.js');
    var color='00ffff';
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
        }
cleverbot.prepare(function() {});
    talkbot = new cleverbot;
    //console.log(args);
      //  var conv = args.split(" ");
        //console.log(conv);
        talkbot.write(args, function(response) {
            console.log(response);
            msg.channel.send("", {
                embed: {
                    color: color,
                    author: {
                        name: "Cleverbot",
                        icon_url: "https://lh5.ggpht.com/DiNbF90a-ecMdyG7c49ARdKdm2mlhLDyNswLcmDm3WM6yDADmMMWtTO1XL96-LCEXIc=w300"
                    },
            timestamp: new Date(),
                    description: response.message,
                }
            }).catch(console.error);
            msg.react('👌');
        })
    },
};