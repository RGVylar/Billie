require('dotenv').config();
const config = require("./config.js");
const Discord = require('discord.js');
const MessageAttachment = require('discord.js');
const MessageEmbed = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const mongoose = require('mongoose');
var excom = 0;

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = config.TOKEN;
const PREFIX = config.PREFIX;
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
      bot.users.get(DEV).send("Im awake, my master! Peace, Peace");
      bot.users.get(DEV1).send("Im awake, my master! Peace, Peace");
  });
bot.on('serverNewMember', function(server, user) {
     user.addTo(server.roles.get("name", "Member"));
});
bot.on('message', msg => {
  
  if (!msg.content.startsWith(PREFIX)) return;
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
	const n = command.indexOf(PREFIX);
	const  name = command.substring(n+PREFIX.length, command.length);
	console.log(command + ' ' + name);
  console.info(`Called command: ${name}`);

  if (!bot.commands.has(name)) return;
  try {
    console.log(name);
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
