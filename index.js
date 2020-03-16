require('dotenv').config();
const config = require("./config.js");
const Discord = require('discord.js');
const MessageAttachment = require('discord.js');
const MessageEmbed = require('discord.js');
const bot = new Discord.Client();
const active = new Map();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const MongoClient = require('mongodb').MongoClient;
var excom = 0;

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = config.TOKEN;
var PREFIX;
const MONGO = config.MONGO;
const DEV = config.DEV;
const DEV3 = config.DEV3;
const TWITCH = config.TWITCH;
var count=0;
var newCount=0;
MongoClient.connect(MONGO, function(err, db) {
  if (err) throw err;
  var dbo = db.db("billie");
  dbo.collection("config").find({}).toArray(function(err, result) {
    if (err) throw err;
    var res = result[0].prefix;
    count = result[0].count;
    ++count;
    PREFIX  = res[0];
  }); 
  db.close();
});
MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db("billie");
        var myquery = {};
        newCount=count.toString();
        var newvalues = {$set: {count: newCount} };
        dbo.collection("config").updateMany(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log('Bot '+newCount+' times deployed');
          db.close();
        });
      });

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: cont + ' ' + PREFIX+'help',
            type: "STREAMING",
            url: TWITCH
        }
    });
      bot.users.get(DEV).send('Im awake, my master! Peace, Peace and It is my '+count+' deploy!');
  });
bot.on('serverNewMember', function(server, user) {
     user.addTo(server.roles.get("name", "Member"));
});
bot.on('message', msg => {
  MongoClient.connect(MONGO, function(err, db) {
    if (err) throw err;
    var dbo = db.db("billie");
    dbo.collection("config").find({}).toArray(function(err, result) {
      if (err) throw err;
      var res = result[0].prefix;
      PREFIX  = res[0];
    }); 
    db.close();
  });
  if (!msg.content.startsWith(PREFIX)) return;
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
	const n = command.indexOf(PREFIX);
	const  name = command.substring(PREFIX.length, command.length);
  console.info(`Called command: ${name}`);

  if (!bot.commands.has(name)) return;
    try {

        let options = {
            active: active
        }

        bot.commands.get(name).execute(msg, args, options, bot);
    /*++excom;
    bot.user.setPresence({
        game: {
            name: cont + ' ' + PREFIX + 'help',
            type: "STREAMING",
            url: TWITCH
        }
    });*/
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
