module.exports = {
  name: 'sv_ping',
  description: 'Ping!',
  execute(msg, args) {
    msg.reply('This is a reply');
    msg.channel.send('```bash\n"This is not a reply"\n```');
  },
};
