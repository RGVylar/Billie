require('dotenv').config();
const config = require("./config.js");
const Discord = require('discord.js');
const MessageAttachment = require('discord.js');
const MessageEmbed = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const MongoClient = require('mongodb').MongoClient;
var excom = 0;

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = config.TOKEN;
var PREFIX ="+";
const MONGO = config.MONGO;
const DEV = config.DEV;
const DEV1 = config.DEV1;
const TWITCH = config.TWITCH;

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
      bot.users.get(DEV).send('Im awake, my master! Peace, Peace and It is ' + Date());
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
    console.log(result);
    console.log(result[0].prefix);
      PREFIX=result[0].prefix;
    }); 
    db.close();
  });
  if (!msg.content.startsWith(PREFIX)) return;
  console.log('the prefix is: '+PREFIX);
  console.log(msg.content);
  const args = msg.content.split(/ +/);
  console.log(args);
  const command = args.shift().toLowerCase();
  console.log(command);
	const n = command.indexOf(PREFIX);
  console.log(n);
  console.log(command.length);
  console.log(PREFIX.length);
	const  name = command.substring(n + PREFIX.length, command.length);
  console.log(name);
  console.info(`Called command: ${name}`);

  if (!bot.commands.has(name)) return;
  try {
    bot.commands.get(name).execute(msg, args);
    ++excom;
    bot.user.setPresence({
        game: {
            name: excom + ' ' + PREFIX + 'list',
            type: "STREAMING",
            url: TWITCH
        }
    });
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
