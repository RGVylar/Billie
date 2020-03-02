module.exports = {
  name: 'sv_attach',
  description: 'attach!',
  execute(msg, args) {
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    msg.channel.send(attachment);
    msg.delete();
  },
};
