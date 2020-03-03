module.exports = {
  name: 'join',
  description: 'join!',
  execute(msg, args) {
     const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
        voiceChannel.join();
  },
};
