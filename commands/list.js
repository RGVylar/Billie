var fs = require('fs');
module.exports = {
  name: 'list',
  description: 'list!',
  execute(msg, args) {
    var files = fs.readdirSync('./.');
    console.log(files.length);
    msg.channel.send(files.join("\n"));
    msg.delete();
  },
};
