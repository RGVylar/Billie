const ytdl = require('ytdl-core');
const queue = new Map();
module.exports = {
  name: 'sv_play',
  description: 'play!',
  execute(msg, args) {
    const ytdl = require('ytdl-core');
     const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
       const connection = voiceChannel.join();
    connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
  },
};
