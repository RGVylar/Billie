const ytdl = require('ytdl-core');
const queue = new Map();
module.exports = {
  name: 'sv_play',
  description: 'play!',
  execute( msg, args) {
    if (msg.member.voice.channel) {
      const connection = msg.member.voice.channel.join();
    } else {
      msg.reply('You need to join a voice channel first!');
    }
    connection.play(ytdl('https://youtu.be/nGfS3y3wnfc', { filter: 'audioonly' }));
  },
};
