var fs = require('fs');
module.exports = {
  name: 'list',
  description: 'list!',
  execute(msg, args) {
    var files = fs.readdirSync('./.');
    console.log(files.length);
    msg.channel.send('```fix\nCommand list =\navatar: sends avatar link\ncoin: flips a coin\ndice: rolls a dice\njoin: joins channel\nlolito: super secret command\nping: test command\nplay: this is not working yet\nsa: I miss this command\nstop: get out of this channel\nsuck: n-nani?...\nturn: Tekkus command\n```');
    msg.delete();
  },
};
