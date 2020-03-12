module.exports = {
  name: 'newcommand',
  description: 'Generates a new file to future command creation',
  execute(msg, args) {
    var fs = require('fs');
	var stream = fs.createWriteStream("commands/command.js");
	stream.once('open', function(fd) {
		stream.write("My first row\n");
		stream.end();
	});
  },
};
