const Discord = require('discord.js');
module.exports = {
  name: 'queue',
  description: 'Show queue list',
    execute: async (msg, args, options, client) => {
        let fetched = options.active.get(msg.guild.id);

        if (!fetched) return msg.channel.send('There currently isn\'t any music playing in this guild!');

        // Variables
        let queue = fetched.queue;
        let nowPlaying = queue[0]; //Now playing will always be the first one in the queue

        let resp = 'Now playing : ' + nowPlaying.songTitle + ' - Requested by : ' + nowPlaying.requester +'\Queue : \r';


        for (var i = 1; i < queue.length; i++) {
            resp += '[' + i + '] - ' + queue[i].songTitle + ' - Requested by : ' + queue[i].requester + '\r'; 
        }

        const queueListMsg = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Queue list')
            .setDescription(resp);

        msg.channel.send(queueListMsg);
  },
};
