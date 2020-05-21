module.exports = {
  name: 'dice',
  description: 'Throw a dice',
  execute(msg, args) {
	var diceRoll = Math.floor( Math.random() * args ) +1;
	console.log(diceRoll);
	if(diceRoll){
		msg.reply('You rolled a ' + diceRoll);
	}
  },
};
