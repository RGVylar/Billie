module.exports = {
  name: 'coin',
  description: 'coin!',
  execute(msg, args) {
  let replies = ['rock', 'paper', 'scissors'];
        let result = Math.floor((Math.random() * replies.length));

        let uReply = args[0];
        if (!uReply) return msg.channel.send(`Please play with one of these responses: \`${replies.join(', ')}\``);
        if (!replies.includes(uReply)) return msg.channel.send(`Only these responses are accepted: \`${replies.join(', ')}\``);

        if (replies[result] === uReply) {
            console.log(replies[result]);
            return msg.channel.send('It\'s a tie! We had the same choice.');
        } else if (uReply === 'rock') {
            console.log(replies[result]);
            if (replies[result] === 'paper') return msg.channel.send('I won!');
            else return msg.channel.send('You won!');
        } else if (uReply === 'scissors') {
            console.log(replies[result]);
            if (replies[result] === 'rock') return msg.channel.send('I won!');
            else return msg.channel.send('You won!');
        } else if (uReply === 'paper') {
            console.log(replies[result]);
            if (replies[result] === 'scissors') return msg.channel.send('I won!');
            else return msg.channel.send('You won!');
        } 
  },
};
