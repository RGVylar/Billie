const translatte = require('translatte');
const Discord = require('discord.js');
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
    if (args[0].includes('-help')) {
      lang=args[0];
      lang = lang.slice(1, lang.length);
      var languaje = languajes.get(lang);
      console.log(languaje);
      var entries= Object.entries(languaje);
      var message='';
      console.log(entries[0][0]);
      /*entries.forEach(([key, value]) => {

      }*/
      //i must delete this awful thing
      var exampleEmbed = new Discord.RichEmbed()
      .setColor('#ffff00')
      .setTitle('Languages')
      .setThumbnail('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg')
      .addField(entries[0][0],entries[0][1],true)
      .addField(entries[1][0],entries[1][1],true)
      .addField(entries[2][0],entries[2][1],true)
      .addField(entries[3][0],entries[3][1],true)
      .addField(entries[4][0],entries[4][1],true)
      .addField(entries[5][0],entries[5][1],true)
      .addField(entries[6][0],entries[6][1],true)
      .addField(entries[7][0],entries[7][1],true)
      .addField(entries[8][0],entries[8][1],true)
      .addField(entries[9][0],entries[9][1],true)
      .addField(entries[10][0],entries[10][1],true)
      .addField(entries[11][0],entries[11][1],true)
      .addField(entries[12][0],entries[12][1],true)
      .addField(entries[13][0],entries[13][1],true)
      .addField(entries[14][0],entries[14][1],true)
      .addField(entries[15][0],entries[15][1],true)
      .addField(entries[16][0],entries[16][1],true)
      .addField(entries[17][0],entries[17][1],true)
      .addField(entries[18][0],entries[18][1],true)
      .addField(entries[19][0],entries[19][1],true)
      .addField(entries[20][0],entries[20][1],true)
      .addField(entries[21][0],entries[21][1],true)
      .addField(entries[22][0],entries[22][1],true)
      .addField(entries[23][0],entries[23][1],true)
      .addField(entries[24][0],entries[24][1],true);
      msg.channel.send(exampleEmbed);   
      exampleEmbed = new Discord.RichEmbed()
      .setColor('#ffff00')
      .setTitle('Languages 2')
      .setThumbnail('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg')
      .addField(entries[25][0],entries[25][1],true)
      .addField(entries[26][0],entries[26][1],true)
      .addField(entries[27][0],entries[27][1],true)
      .addField(entries[28][0],entries[28][1],true)
      .addField(entries[29][0],entries[29][1],true)
      .addField(entries[30][0],entries[30][1],true)
      .addField(entries[31][0],entries[31][1],true)
      .addField(entries[32][0],entries[32][1],true)
      .addField(entries[33][0],entries[33][1],true)
      .addField(entries[34][0],entries[34][1],true)
      .addField(entries[35][0],entries[35][1],true)
      .addField(entries[36][0],entries[36][1],true)
      .addField(entries[37][0],entries[37][1],true)
      .addField(entries[38][0],entries[38][1],true)
      .addField(entries[39][0],entries[39][1],true)
      .addField(entries[40][0],entries[40][1],true)
      .addField(entries[41][0],entries[41][1],true)
      .addField(entries[42][0],entries[42][1],true)
      .addField(entries[43][0],entries[43][1],true)
      .addField(entries[44][0],entries[44][1],true)
      .addField(entries[45][0],entries[45][1],true)
      .addField(entries[46][0],entries[46][1],true)
      .addField(entries[47][0],entries[47][1],true)
      .addField(entries[48][0],entries[48][1],true);
      msg.channel.send(exampleEmbed);   
      exampleEmbed = new Discord.RichEmbed()
      .setColor('#ffff00')
      .setTitle('Languages 3')
      .setThumbnail('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg')
      .addField(entries[49][0],entries[49][1],true)
      .addField(entries[50][0],entries[50][1],true)
      .addField(entries[51][0],entries[51][1],true)
      .addField(entries[52][0],entries[52][1],true)
      .addField(entries[53][0],entries[53][1],true)
      .addField(entries[54][0],entries[54][1],true)
      .addField(entries[55][0],entries[55][1],true)
      .addField(entries[56][0],entries[56][1],true)
      .addField(entries[57][0],entries[57][1],true)
      .addField(entries[58][0],entries[58][1],true)
      .addField(entries[59][0],entries[59][1],true)
      .addField(entries[60][0],entries[60][1],true)
      .addField(entries[61][0],entries[61][1],true)
      .addField(entries[62][0],entries[62][1],true)
      .addField(entries[63][0],entries[63][1],true)
      .addField(entries[64][0],entries[64][1],true)
      .addField(entries[65][0],entries[65][1],true)
      .addField(entries[66][0],entries[66][1],true)
      .addField(entries[67][0],entries[67][1],true)
      .addField(entries[68][0],entries[68][1],true)
      .addField(entries[69][0],entries[69][1],true)
      .addField(entries[70][0],entries[70][1],true)
      .addField(entries[71][0],entries[71][1],true)
      .addField(entries[72][0],entries[72][1],true);
      msg.channel.send(exampleEmbed);   
      exampleEmbed = new Discord.RichEmbed()
      .setColor('#ffff00')
      .setTitle('Languages 4')
      .setThumbnail('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg')
      .addField(entries[73][0],entries[73][1],true)
      .addField(entries[74][0],entries[74][1],true)
      .addField(entries[75][0],entries[75][1],true)
      .addField(entries[76][0],entries[76][1],true)
      .addField(entries[77][0],entries[77][1],true)
      .addField(entries[78][0],entries[78][1],true)
      .addField(entries[79][0],entries[79][1],true)
      .addField(entries[80][0],entries[80][1],true)
      .addField(entries[81][0],entries[81][1],true)
      .addField(entries[82][0],entries[82][1],true)
      .addField(entries[83][0],entries[83][1],true)
      .addField(entries[84][0],entries[84][1],true)
      .addField(entries[85][0],entries[85][1],true)
      .addField(entries[86][0],entries[86][1],true)
      .addField(entries[87][0],entries[87][1],true)
      .addField(entries[88][0],entries[88][1],true)
      .addField(entries[89][0],entries[89][1],true)
      .addField(entries[90][0],entries[90][1],true)
      .addField(entries[91][0],entries[91][1],true)
      .addField(entries[92][0],entries[92][1],true)
      .addField(entries[93][0],entries[93][1],true)
      .addField(entries[94][0],entries[94][1],true)
      .addField(entries[95][0],entries[95][1],true)
      .addField(entries[96][0],entries[96][1],true)
      .addField(entries[97][0],entries[97][1],true);
      msg.channel.send(exampleEmbed);  
      exampleEmbed = new Discord.RichEmbed()
      .setColor('#ffff00')
      .setTitle('Languages 5')
      .setThumbnail('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg')
      .addField(entries[98][0],entries[98][1],true)
      .addField(entries[99][0],entries[99][1],true)
      .addField(entries[100][0],entries[100][1],true)
      .addField(entries[101][0],entries[101][1],true)
      .addField(entries[102][0],entries[102][1],true)
      .addField(entries[103][0],entries[103][1],true)
      .addField(entries[104][0],entries[104][1],true)
      .addField(entries[105][0],entries[105][1],true)
      .addField(entries[106][0],entries[106][1],true);
      msg.channel.send(exampleEmbed); 
    }
    else if (args[0].includes('-')) {
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