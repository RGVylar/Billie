module.exports = {
  name: 'sv_attach',
  description: 'attach!',
  execute(msg, args) {
    msg.channel.send(MessageAttachment('https://i.imgur.com/w3duR07.png'));
    msg.delete();
  },
};
