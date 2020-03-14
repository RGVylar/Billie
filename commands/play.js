const Discord = require('discord.js');
module.exports = {
  name: 'play',
  description: 'play!',
  execute: async (msg, args) => {
      const ytdl = require('ytdl-core');

      if (msg.member.voiceChannel) {

          console.log("joined channel");

          // the bot is connected
          const ytdl = require('ytdl-core');
          const fs = require('fs');
          //const ytsr = require('ytsr');
          var voiceChannel = msg.member.voiceChannel;
          const stream = ytdl(args[0], { filter: 'audioonly' });
          // Wait until writing is finished
          stream.pipe(fs.createWriteStream('tmp_buf_audio.mp3'))
              .on('end', () => {

                  voiceChannel.join()
                  .then(connection => {
                  const streamOptions = { seek: 0, volume: 1 };
                          connection.playStream(fs.createReadStream('tmp_buf_audio.mp3'), streamOptions)
                              // When no packets left to send, leave the channel.
                              .on('end', () => {
                                  console.log("left channel");
                                  voiceChannel.leave();
                               })

                      }).catch(err => console.log(err));

          }).catch(err => console.log(err));
      } else {
          msg.reply('You need to join a voice channel first!');
      }
      
  },
};
