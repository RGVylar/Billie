const queueSong = [];

module.exports = {
  name: 'stop',
  description: '[Spanish music stops]',
  execute(msg, args) {   
    if(msg.channel.type=='dm'){
      msg.author.send('This command is server only');
    }
    else{
    if(!msg.member.voice.channel)
        return msg.channel.send("You are not in a voice channel");
    else{
        msg.channel.send("Bye bye!");
        queueSong.splice(0, queueSong.length);
        return msg.member.voice.channel.leave();
    }
  }  
  },
};
