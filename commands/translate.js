const translatte = require('translatte');
//const stringpad = require('stringpad');
module.exports = {
  name: 'translate',
  description: 'translate!',
  execute(msg, args) {
    var functions = require('../functions/functions.js');
    var languajes = require('../functions/languages.js');
    let dice =  functions.dice();
    var lang;
    var quote;
    /*if (args[0].includes('-help')) {
      lang=args[0];
      lang = lang.slice(1, lang.length);
      var languaje = languajes.get(lang);
      console.log(languaje);
      var entries= Object.entries(languaje);
      var message='';
      var fullmsg='';
      entries.forEach(([key, value]) => {
        var val='';
        key=stringpad.center(key,5);
        value=stringpad.center(value,30);
        val=key+':'+value;
        val= stringpad.center(val, 50-val.length);
        message+='·'+val+'·'+'\n';
        if(120<message.length){
          fullmsg+=message+'\n'
          console.log('clean msg '+message.length+' '+fullmsg.length);
          message='';
        }
        if(1000<message.length){
          fullmsg+='```';
          fullmsg+=message;
          fullmsg+='```';
          msg.channel.send(fullmsg);
          console.log('clean full');
        }
      })
    }
    else */
    if (args[0].includes('-')) {
      lang=args[0];
      lang = lang.slice(1, lang.length);
      var languaje = languajes.get(lang);
      if(languaje){
        args.splice(0,1);
        if(dice==7){
          quote = 'You were expecting a translated text, but it was me, Dio! ';
          msg.react('696668890473955338');
        }
        else{
          quote = args.join(' ');
        }
        translatte(quote, {to: lang}).then(res => {
          msg.channel.send(languaje+': '+res.text);
        }).catch(err => {
          console.error(err);
        });
      }
      else{
        msg.channel.send(lang+' doesnt exist');
      }
    }
    else{
      if(dice==7){
        quote = 'You were expecting a translated text, but it was me, Dio!';
        msg.react('696668890473955338');
      }
      else{
        quote = args.join(' ');
      }
      translatte(quote, {to: 'en'}).then(res => {
        msg.channel.send('EN: '+res.text);
      }).catch(err => {
        console.error(err);
      });
    }
  },
}