module.exports = {
  name: 'sv_play',
  description: 'play!',
  execute: async (msg, args) => {
    const ytdl = require('ytdl-core');
    if (msg.member.voice.channel) {
      const connection = awaits msg.member.voice.channel.join();
    } else {
      msg.reply('You need to join a voice channel first!');
    }
    connection.play(ytdl('https://youtu.be/nGfS3y3wnfc', { filter: 'audioonly' }));
  },
};
