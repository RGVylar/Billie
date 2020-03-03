require('dotenv').config();
const config = require("./config.js");
const Discord = require('discord.js');
const MessageAttachment = require('discord.js');
const MessageEmbed = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = config.TOKEN;
const PREFIX = config.PREFIX;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'sv_list',
            type: "STREAMING",
            url: "https://www.twitch.tv/rgvylar"
        }
    });
});
bot.on('serverNewMember', function(server, user) {
     user.addTo(server.roles.get("name", "Member"));
});
bot.on('message', msg => {
  
  if (!msg.content.startsWith(PREFIX)) return;
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
	const n = command.indexOf(PREFIX);
	const  name = command.substring(n, command.lenght);
  console.info(`Called command: ${name}`);

  if (!bot.commands.has(name)) return;
  try {
    console.log(name);
    bot.commands.get(name).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
