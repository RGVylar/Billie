var fs = require('fs');
const config = require("../config.js");
module.exports = {
  name: 'help',
  description: 'list of commands',
  execute(msg, args) {
    var files = fs.readdirSync('./commands');
    var i;
    for (i = 0; i < files.length; i++) {
    var n = files[i].indexOf('.');
      files[i] =  '- ' + config.PREFIX + files[i].substring(0, n);
    }
    msg.channel.send('```fix\nCommands =\n'+files.join("\n")+'```');
    //msg.delete();
  },
};
