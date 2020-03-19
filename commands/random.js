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
      /*const video = new Discord.RichEmbed()
      .setColor('#ffff00')
      .setTitle(data.snippet.title)
      .setDescription(data.snippet.description)
      .setURL('https://youtu.be/'+data.id.videoId)
      .setImage('https://img.youtube.com/vi/'+data.id.videoId+'/0.jpg')
      .setThumbnail('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg');
      return msg.channel.send(video);*/
      msg.channel.send("https://youtu.be/"+data.id.videoId);
    })
  },
};