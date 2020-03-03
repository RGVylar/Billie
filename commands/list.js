var fs = require('fs');
module.exports = {
  name: 'list',
  description: 'list!',
  execute(msg, args) {
    var files = fs.readdirSync('./commands');
    var i;
    for (i = 0; i < files.length; i++) {
    var n = files[i].indexOf('.');
      files[i] =  '- '+PREFIX+files[i].substring(0, n);
    }
    msg.channel.send('```fix\nCommands =\n'+files.join("\n")+'```');
    msg.delete();
  },
};
