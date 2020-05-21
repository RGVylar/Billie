module.exports = {
  name: 'ping',
  description: 'Ping command, i mean, ez',
  execute(msg, args) {
    msg.reply('Pong! Your ping is `' + `${Date.now() - msg.createdTimestamp}` + ' ms`');
  },
};
