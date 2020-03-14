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
          var voiceChannel = message.member.voiceChannel;
          const stream = ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' });
          const streamOptions = { seek: 0, volume: 1 };
          const dispatcher = connection.playStream(stream, streamOptions);


          dispatcher.on("end", end => {
              console.log("left channel");
              voiceChannel.leave();

          }).catch(err => console.log(err));
      } else {
          msg.reply('You need to join a voice channel first!');
      }
      
  },
};
