module.exports = {
  name: 'sv_dice',
  description: 'dice!',
  execute(msg, args) {
	var diceRoll = Math.floor( Math.random() * args ) +1;
	if(diceRoll){
		msg.reply('You rolled a ' + diceRoll);
		//msg.delete();  
	}
  },
};
