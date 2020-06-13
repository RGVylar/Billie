module.exports = {
  name: 'join',
  description: 'Bot will join your voice channel',
  execute(msg, args) {
  	if(msg.channel.type=='dm'){
  		msg.author.send('This command is server only');
  	}
  	else{
	    const voiceChannel = msg.member.voice.channel;
	    if (!voiceChannel || voiceChannel.type !== 'voice') {
	      return msg.reply('I couldn\'t connect to your voice channel...');
	    }
	    voiceChannel.join();	
  	}
  },
};
