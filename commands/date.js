module.exports = {
  name: 'date',
  description: 'date!',
  execute(msg, args) {
    msg.reply('It is ' + Date());
    msg.delete();
  },
};
