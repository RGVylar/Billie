var youtube = require('youtube-random-video');
const config = require("../config.js");
const Discord = require('discord.js');
var request = require('request');
const KEY = config.KEY;
module.exports = {
  name: 'random',
  description: 'random!',
  execute(msg, args) {
    youtube.getRandomVid(KEY, function(err , data){
      msg.channel.send(data.id.videoId);
    })
  },
};