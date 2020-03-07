module.exports = {
  name: 'play',
  description: 'play!',
  execute: async (msg, args) => {
    const ytdl = require('ytdl-core');
      const connection = await msg.member.voiceChannel.join().then(connection => {
            console.log("joined channel");
            const stream = ytdl('https://youtu.be/nGfS3y3wnfc', { filter : 'audioonly' });
            const dispatcher = connection.playStream(stream, streamOptions);
            dispatcher.on("end", end => {
                console.log("left channel");
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
  },
};
