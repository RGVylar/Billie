const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const MongoClient = require('mongodb').MongoClient;
const config = require("../config.js");
module.exports = {
  name: 'play',
  description: 'play!',
  execute: async (msg, args, options, client) => {
      const ytdl = require('ytdl-core');

      // Check if the author is connected to a voice channel
      if (msg.member.voiceChannel) {

          //if (msg.guild.me.voiceChannel) {
          //    console.log("the bot is already connected");
          //}

          if (!args || args == "") {
              const noArgsError = new Discord.RichEmbed()
                  .setColor('#FF0000')
                  .setTitle('What do I play ? Duh')
                  .setDescription('You need to put a link for me to play it !')
                  .setImage("https://media1.tenor.com/images/2290e840877d07ab1cbfbdc72853f386/tenor.gif?itemid=6061449");

              msg.channel.send(noArgsError);
          } else {


              //Validate Info
              let validate = await ytdl.validateURL(args[0]);

              if (!validate) {
                  const noArgsError = new Discord.RichEmbed()
                      .setColor('#FF0000')
                      .setTitle('Insert a good URL')
                      .setDescription('You need to put a functional youtube link for me to play it !')
                      .setImage("https://media1.tenor.com/images/2290e840877d07ab1cbfbdc72853f386/tenor.gif?itemid=6061449");

                  msg.channel.send(noArgsError);
              } else {

                  //Get Info
                  let info = await ytdl.getInfo(args[0]);

                  // First, we need top fetch the active -- Also, if it's not defined it wwill be hold {}
                  let data = options.active.get(msg.guild.id) || {};

                  // Next we update the data
                  if (!data.connection) data.connection = await msg.member.voiceChannel.join();
                  if (!data.queue) data.queue = []; //if there isn't a queue array, create one
                  data.guildID = mesg.guild.id; 

                  //We add it to the queue
                  data = queue.push({
                      songTitle: info.title,
                      requester: msg.author.tag,
                      url: args[0],
                      announceChannel: msg.channel.id
                  });

                  //if there isn't a dispatcher already created, run the play function
                  if (data.dispatcher) play(client, options, data);
                  else { // If there is already a dispatcher
                      const songAddedQueue = new Discord.RichEmbed()
                          .setColor('#0099ff')
                          .setTitle('Song added to queue :' + info.title)
                          .setDescription('Requested by : ' + info.author.id)
                          .setURL(url_string)
                      msg.channel.send(songAddedQueue);
                  }

                  options.active.set(msg.guild.id, data);

              }
          }
         
      } else {
          msg.reply('You need to join a voice channel first!');
          }


      
    },


};

async function play(client, options, data) {

    //Sending the now playing message
    const MONGO = config.MONGO;
    MongoClient.connect(MONGO, function (err, db) {
        if (err) throw err;
        var dbo = db.db("billie");
        dbo.collection("dance").find({}).toArray(function (err, result) {
            if (err) throw err;
            const user = msg.member.user.tag;
            const n = user.indexOf("#");
            const res = user.substring(0, n);
            var randomIndex = Math.floor(Math.random() * result.length);
            var gif = result[randomIndex].url;
            const nowPlayingMessage = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Now Playing :' + data.queue[0].songTitle)
                .setDescription('Requested by : ' + data.queue[0].author.tag)
                .setImage(gif[0]);
            msg.channel.send(nowPlayingMessage);
        });
        db.close();
    });

    //Update the dispatcher data
    const streamOptions = { seek: 0, volume: 0.75 };

    data.dispatcher = await data.connection.play(ytdl.playStream(data.queue[0].url, { filter: 'audioonly' }), streamOptions);
    data.dispatcher.guildID = data.guildID;

    //Create listener even that will run when the song end
    data.dispatcher.once('end', function () {
        finish(client, options, this);
    });
};

function finish(client, options, dispatcher) {

    //fetch the guild object form the map
    let fetched = options.active.get(dispatcher.guildID);

    //remove first item in queue
    fetched.queue.shift();

    //Check if queue empty
    if (fetched.queue.length > 0) {
        options.active.set(dispatcher.guildID, fetched);

        // finally run the play function with the new song
        play(client, options, fetched);
    } else {

        //Delete the guild object from the map
        options.active.delete(dispatcher.guildID);

        // Leave the voice channel
        let vc = client.guild.get(dispatcher.guildID).me.voiceChannel; // Get the voice channel of the bot in the guild
        if (vc) vc.leave();
        const botDisconnectMessage = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('No more song !')
            .setDescription('Adios Mios !')
            .setImage("https://media1.tenor.com/images/34657995bdac0aa521277ecc21c4e4a0/tenor.gif?itemid=15967381");
        msg.channel.send(botDisconnectMessage);

    }
}