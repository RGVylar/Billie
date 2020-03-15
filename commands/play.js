const Discord = require('discord.js');
const queueSong = [];
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
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
              const fs = require('fs');
              //const ytsr = require('ytsr');
              var voiceChannel = msg.member.voiceChannel;
              voiceChannel.join()
                  .then(connection => {

                      queueSong.push(args[0]);

                      if (queueSong.length == 1) {
                          play(queueSong[0], connection, msg);
                      } else {
                          const songAddedQueue = new Discord.RichEmbed()
                              .setColor('#0099ff')
                              .setTitle('Song added to the queue !');
                          msg.channel.send(songAddedQueue);
                      }
                      msg.delete();

                  })
          }
         
      } else {
          msg.reply('You need to join a voice channel first!');
          }


      
    },


};

function play(url_string, connection, msg) {
    const ytdl = require('ytdl-core');
    const stream = ytdl(url_string, { filter: 'audioonly' });
    const streamOptions = { seek: 0, volume: 1 };
    const MONGO = config.MONGO;
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db("billie");
      dbo.collection("dance").find({}).toArray(function(err, result) {
            if (err) throw err;
          const user = msg.member.user.tag;
          const n = user.indexOf("#");
          const  res = user.substring(0, n);
            var randomIndex = Math.floor(Math.random() * result.length); 
            var gif = result[randomIndex].url;
            const nowPlayingMessage = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Now Playing :' + url_string)
                .setURL(url_string)
                .setImage(gif[0]);
            msg.channel.send(nowPlayingMessage);
      }); 
      db.close();
    });
    connection.playStream(stream, streamOptions)

    // When no packets left to send, leave the channel.
    .on('end', () => {

        consol.log("Enter on finish");
        queueSong.shift();
        if (!queueSong || queueSong == "" || queueSong.length == 0) {
            consol.log("no more song in queue");

            console.log("left channel");
            const botDisconnectMessage = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('No more song !')
                .setDescription('Adios Mios !')
                .setImage("https://media1.tenor.com/images/34657995bdac0aa521277ecc21c4e4a0/tenor.gif?itemid=15967381");
            msg.channel.send(botDisconnectMessage);
            voiceChannel.leave();
        } else {
            consol.log("Playing next song");
            play(queueSong[0], connection, msg);
        }

    })
};
