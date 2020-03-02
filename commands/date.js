module.exports = {
  name: 'sv_date',
  description: 'date!',
  execute(msg, args) {
    msg.reply('It is ' + Date());
    msg.delete();
  },
};
