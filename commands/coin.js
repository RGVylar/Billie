module.exports = {
  name: 'coin',
  description: 'coin!',
  execute(msg, args) {
    var flipcoin = ["heads", "tails"];
    const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member;
    var randomIndex = Math.floor(Math.random() * flipcoin.length); 
    msg.channel.send(flipcoin[randomIndex]);
  },
};

 