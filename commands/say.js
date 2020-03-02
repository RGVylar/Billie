module.exports = {
  name: 'sv_say',
  description: 'say!',
  execute(msg, args) {
    const sayMessage = args.join(" ");
    msg.delete().catch(O_o=>{}); 
    msg.channel.send(sayMessage);
  },
};
