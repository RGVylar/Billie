const mongoose = require('mongoose');
const config = require("../config.js");
module.exports = {
  name: 'mongo',
  description: 'mongo!',
  execute(msg, args) {
	const MONGO = config.MONGO;
  	mongoose.connect(MONGO, {useNewUrlParser: true});
  },
};
