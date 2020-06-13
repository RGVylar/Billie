var youtube = require('youtube-random-video');
const config = require("../config.js");
const Discord = require('discord.js');
var request = require('request');
const KEY = config.KEY;
const url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";
module.exports = {
  name: 'random',
  description: 'send a random video from youtube',
  execute(msg, args, options, bot) {
        var functions = require('../functions/functions.js');
        var color='00ffff';
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
        }
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
      else if(args.includes('-t')){
        request(url, (er, res, body) => {
        try {
          let data = JSON.parse(body);
          let { quoteText, quoteAuthor } = data;
          console.log(quoteText);
          console.log(`- ${quoteAuthor}`);
          const exampleEmbed = new Discord.MessageEmbed()
          .setColor(color)
          .setTitle('Your new status!')
            .setDescription(quoteText)
            .setFooter(quoteAuthor);
          return msg.channel.send(exampleEmbed);
        } catch (e) {
          return msg.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
        }
      });
      }
      else{
        msg.reply("This is your random video: "+data.snippet.title);
        return msg.channel.send("https://youtu.be/"+data.id.videoId);
      }
    });
  },
};