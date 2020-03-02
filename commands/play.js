const ytdl = require('ytdl-core');
const queue = new Map();
module.exports = {
  name: 'sv_play',
  description: 'play!',
  execute(msg, args) {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
    } else {
      msg.reply('You need to join a voice channel first!');
    }
    connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
  },
};
