module.exports = {
  name: 'coin',
  description: 'Toss a coin to your bot',
  execute(msg, args) {
    var flipcoin = ["heads", "tails"];
    var randomIndex = Math.floor(Math.random() * flipcoin.length); 
    msg.reply('Its '+flipcoin[randomIndex]); 
  },
};