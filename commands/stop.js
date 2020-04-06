const queueSong = [];

module.exports = {
  name: 'stop',
  description: 'stop!',
  execute(msg, args) {   
    if(!msg.member.voice.channel)
        return msg.channel.send("You are not in a voice channel");
    else{
        msg.channel.send("Bye bye!");
        queueSong.splice(0, queueSong.length);
        return msg.member.voice.channel.leave();
    }   
  },
};
