module.exports = {
  name: 'sv_newcommand',
  description: 'newcommand!',
  execute(msg, args) {
    var fs = require('fs');
	var stream = fs.createWriteStream("commands/command.js");
	stream.once('open', function(fd) {
		stream.write("My first row\n");
		stream.end();
	});
  },
};
