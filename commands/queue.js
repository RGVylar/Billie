const Discord = require('discord.js');
module.exports = {
  name: 'queue',
  description: 'Show queue list',
    execute: async (msg, args, options, bot) =>{
        var functions = require('../functions/functions.js');
        var color = functions.getRoleColor(msg,bot);
        let fetched = options.active.get(msg.guild.id);

        if (!fetched) return msg.channel.send('There currently isn\'t any music playing in this guild!');

        // Variables
        let queue = fetched.queue;
        let nowPlaying = queue[0]; //Now playing will always be the first one in the queue

        let resp = 'Now playing : ' + nowPlaying.songTitle + ' - Requested by : ' + nowPlaying.requester +'\rQueue : \r';


        for (var i = 1; i < queue.length; i++) {
            resp += '[' + i + '] - ' + queue[i].songTitle + ' - Requested by : ' + queue[i].requester + '\r'; 
        }

        const queueListMsg = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Queue list')
            .setDescription(resp);

        msg.channel.send(queueListMsg);
  },
};
