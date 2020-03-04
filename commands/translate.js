module.exports = {
  name: 'translate',
  description: 'translate!',
  execute(msg, args) {
  const sayMessage = args.join(" ");
  var translate = require('../lib/translator');
 translate.text(sayMessage, function(err, text){
 
    msg.delete().catch(O_o=>{}); 
    msg.channel.send(text);
 });
    
  },
};
