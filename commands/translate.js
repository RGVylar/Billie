const translate = require('../lib/translator.js');
module.exports = {
  name: 'translate',
  description: 'translate!',
  execute(msg, args) {
  const sayMessage = args.join(" ");
  translate.text(sayMessage, function(err, text){
    console.log(text);
    msg.channel.send(text);
    msg.delete().catch(O_o=>{}); 
 });
    
  },
};
