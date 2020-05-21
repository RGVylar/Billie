module.exports = {
  name: 'say',
  description: 'Impersonate the bot',
  execute(msg, args) {
    const sayMessage = args.join(" ");
    msg.delete().catch(O_o=>{}); 
    msg.channel.send(sayMessage);
  },
};
