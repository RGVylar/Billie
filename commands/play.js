const Discord = require('discord.js');
module.exports = {
  name: 'play',
  description: 'play!',
  execute: async (msg, args) => {
      const ytdl = require('ytdl-core');




      if (msg.member.voiceChannel) {
          if (!args || args == "") {
              const noArgsError = new Discord.RichEmbed()
                  .setColor('#FF0000')
                  .setTitle('What do I play ? Duh')
                  .setDescription('You need to put a link for me to play it !')
                  .setImage("https://media1.tenor.com/images/2290e840877d07ab1cbfbdc72853f386/tenor.gif?itemid=6061449");

              msg.channel.send(noArgsError);
          } else {
              console.log("joined channel");
              // the bot is connected
              const ytdl = require('ytdl-core');
              const fs = require('fs');
              //const ytsr = require('ytsr');
              var voiceChannel = msg.member.voiceChannel;
              voiceChannel.join();
              const stream = ytdl(args[0], { filter: 'audioonly' });
              // Wait until writing is finished
              stream.pipe(fs.createWriteStream('tmp_buf_audio.mp3'));
              stream.on('finish', () => {

                  voiceChannel.then(connection => {

                      const nowPlayingMessage = new Discord.RichEmbed()
                          .setColor('#0099ff')
                          .setTitle('Now Playing :')
                          .setURL(args[0])
                          .setImage("https://media1.tenor.com/images/64a1c5b08061597450ad74c769dcfd1f/tenor.gif?itemid=15936106");

                      msg.channel.send(nowPlayingMessage);

                      const streamOptions = { seek: 0, volume: 1 };
                      connection.playStream(fs.createReadStream('tmp_buf_audio.mp3'), streamOptions)
                          // When no packets left to send, leave the channel.
                          .on('end', () => {
                              console.log("left channel");
                              voiceChannel.leave();
                          })

                  }).catch(err => console.log(err));

              }).catch(err => console.log(err));
          }
         
      } else {
          msg.reply('You need to join a voice channel first!');
          }


      
  },
};
