module.exports = {
  name: 'dance',
  description: 'dance!',
  execute(msg, args) {
    //msg.channel.send("Testing message.", { files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    //.channel.send('<https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif>');
    msg.channel.send({ files: ["https://media.discordapp.net/attachments/652432414135681060/680578706875482132/tenor_2.gif"] });
    msg.delete();
  },
};