const translate = require('translate');
module.exports = {
  name: 'translate',
  description: 'translate!',
  execute(msg, args) {
  const sayMessage = args.join(" ");
    translate('Hello world', 'es').then(text => {
    console.log(text);  // Hola mundo
  });
    msg.channel.send(text);
    msg.delete().catch(O_o=>{}); 
 
    
  },
};
