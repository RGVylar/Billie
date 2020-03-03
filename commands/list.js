var fs = require('fs');
module.exports = {
  name: 'list',
  description: 'list!',
  execute(msg, args) {
    var files = fs.readdirSync('./commands');
    console.log(files.length);
    msg.channel.send('```fix\nCommands =\n'+files.join("\n")+'```');
    msg.delete();
  },
};
