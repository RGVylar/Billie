const MongoClient = require('mongodb').MongoClient;
const MessageAttachment = require('discord.js');
const MessageEmbed = require('discord.js');
const botCommands = require('./commands');
const config = require("./config.js");
const Discord = require('discord.js');
const bot = new Discord.Client();
const active = new Map();
const commands = require('./commands/command.js');
const TWITCH = config.TWITCH;
const TOKEN = config.TOKEN;
const MONGO = config.MONGO;
const DEV3 = config.DEV3;
const DEV = config.DEV;
const DB = config.DB;

var newCount="0";
var count="0";
var cont="0";
var PREFIX;

require('dotenv').config();

bot.commands = new Discord.Collection();
Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

MongoClient.connect(MONGO, function(err, db) {
  var dbo = db.db(DB);
  dbo.createCollection("config", function(err, res) {
    if (err) {
      console.log("Config exist");
      dbo.collection("config").find({}).toArray(function(err, result) {
        if (err) throw err;
        if(typeof result[0] !== 'undefined'){
          var res = result[0].prefix;
          count = result[0].count;
          cont=count;
          ++count;
          newCount=count.toString();
          PREFIX  = res[0];
        }
        else{  
          console.log("Config created");
          var myobj = {  "prefix": [
          "!"
          ],
          "count": "0"};
          dbo.collection("config").insertOne(myobj, function(err, res) {
            if (err) {
              console.log("Error inserting config");
            }
            else{    
              console.log("Config inserted");
            }
            db.close();
          });
        }
        db.close();
      }); 
    }
    else {
      dbo.collection("config").find({}).toArray(function(err, result) {
        if (err) throw err;
        if(typeof result[0] != 'undefined'){
          var res = result[0].prefix;
          count = result[0].count;
          cont=count;
          ++count;
          newCount=count.toString();
          PREFIX  = res[0];
        }
        else{  
          console.log("Config created");
          var myobj = {  "prefix": [
          "!"
          ],
          "count": "0"};
          dbo.collection("config").insertOne(myobj, function(err, res) {
            if (err) {
              console.log("Error inserting config");
            }
            else{    
              console.log("Config inserted");
            }
            db.close();
          });
        }
        db.close();
      });
    }
    db.close();
  });
  dbo.createCollection("whitelist", function(err, res) {
    if (err) {
      console.log("Whitelist exist");
    }
    else {
      console.log("Whitelist created");
    }
    db.close();
  });
});

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setStatus('available')
  bot.user.setPresence({
    game: {
      name: PREFIX+'help',
      type: "STREAMING",
      url: TWITCH
    }
  });
  //bot.users.get(DEV).send('Im awake, my master! Peace, Peace! It is my '+count+' successful deploy!');
});

bot.on('serverNewMember', function(server, user) {
 user.addTo(server.roles.get("name", "Member"));
});

bot.on('message', async msg => {
  MongoClient.connect(MONGO, function(err, db) {
    if (err) throw err;
    var dbo = db.db(DB);
    dbo.collection("config").find({}).toArray(function(err, result) {
      if (err) throw err;
      if(typeof result[0] !== 'undefined'){
        var res = result[0].prefix;
        PREFIX  = res[0];
      }
      else{
        console.log("Config is undefined"); 
      }
      db.close();
    }); 
  });
  if (!msg.content.startsWith(PREFIX)) return;
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  const n = command.indexOf(PREFIX);
  const  name = command.substring(PREFIX.length, command.length);
  console.info(`Called command: ${name}`);
  try {

    let options = {
      active: active
    }
    let result = await bot.commands.get('execution').execute(msg, args,name, options, bot);
    if(!result){
      if (!bot.commands.has(name)) return;
      bot.commands.get(name).execute(msg, args, options, bot,PREFIX);
    }
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});