const Discord = require('discord.js');
const KEY = config.KEY;
var youtube = require('youtube-random-video');
var request = require('request');
module.exports = {
  name: 'random',
  description: 'random!',
  execute(msg, args) {
    youtube.getRandomVid(KEY, function(err , data){
      //key is your youtube api key
      //data is a JSON object
      msg.channel.send(data);
    })
  },
};