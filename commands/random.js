var youtube = require('youtube-random-video');
const config = require("../config.js");
const Discord = require('discord.js');
var request = require('request');
const KEY = config.KEY;
module.exports = {
  name: 'random',
  description: 'send a random video from youtube',
  execute(msg, args, options, bot) {
        var functions = require('../functions/functions.js');
        var color = functions.getRoleColor(msg,bot);
        let fetched = options.active.get(msg.guild.id);
    youtube.getRandomVid(KEY, function(err , data){
      if (args.includes('-p')) {
        args.splice(args.indexOf('-p'), 1);
        const video = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(data.snippet.title)
        //.setDescription(data.snippet.description)
        .setURL('https://youtu.be/'+data.id.videoId)
        .setImage('https://img.youtube.com/vi/'+data.id.videoId+'/0.jpg')
        return msg.channel.send(video);
      }
      else{
        msg.reply("This is your random video: "+data.snippet.title);
        return msg.channel.send("https://youtu.be/"+data.id.videoId);
      }
    })
  },
};