module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute(msg, args) {
    msg.reply('Pong! Your ping is `' + `${Date.now() - msg.createdTimestamp}` + ' ms`');
  },
};
