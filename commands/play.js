const Discord = require('discord.js');
module.exports = {
  name: 'play',
  description: 'play!',
  execute: async (msg, args) => {
      const ytdl = require('ytdl-core');

      if (msg.member.voiceChannel) {

          const connection = await msg.member.voiceChannel.join();
          console.log("joined channel");
          // the bot is connected
          const ytdl = require('ytdl-core');

          var server = servers[msg.guild.id];
          server.dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));


          server.dispatcher.on("end", end => {
              console.log("left channel");
              connection.disconnect();

          }).catch(err => console.log(err));
      } else {
          msg.reply('You need to join a voice channel first!');
      }
      
  },
};
