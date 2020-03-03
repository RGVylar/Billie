module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute(msg, args) {
    msg.reply('This is a reply');
    msg.channel.send('```bash\n"This is not a reply"\n```');
    msg.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - msg.createdTimestamp}` + ' ms`');
  },
};
