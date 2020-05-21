module.exports = {
  name: 'coin',
  description: 'Toss a coin to your bot',
  execute(msg, args) {
    var flipcoin = ["heads", "tails"];
    const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member;
    var randomIndex = Math.floor(Math.random() * flipcoin.length); 
    msg.reply('Its '+flipcoin[randomIndex]); 
  },
};