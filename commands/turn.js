module.exports = {
  name: 'sv_turn',
  description: 'Turn!',
  execute(msg, args) {
    msg.reply('End his turn');
   	if(msg.member.id==399925589290647552){msg.channel.send('<@273081779420921856> Now is your turn!');}
   	if(msg.member.id==273081779420921856){msg.channel.send('<@399925589290647552> Now is your turn!');}
    msg.delete();
  },
};
