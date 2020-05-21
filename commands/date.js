module.exports = {
  name: 'date',
  description: 'Show the date',
  execute(msg, args) {
    msg.reply('It is ' + Date());
  },
};
