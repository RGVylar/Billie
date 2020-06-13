const Discord = require('discord.js');
const config = require("../config.js");
const DEV = config.DEV;
const DEV4 = config.DEV4;
module.exports = {
  name: 'turn',
  description: 'Are we still doing this?',
  execute: async (msg, args) =>{
    var functions = require('../functions/functions.js');
    let dice =  functions.dice();
    if(dice==7){
      await functions.dio(msg,'turn');
    }
    else{
      msg.reply('End his turn');
      if(msg.member.id==DEV){msg.channel.send('<@'+DEV4+'> Now is your turn!');}
      if(msg.member.id==DEV4){msg.channel.send('<@'+DEV+'> Now is your turn!');}
      if((msg.member.id!=DEV4)&&(msg.member.id!=DEV)){msg.channel.send('...but...who are you?');}
      msg.delete();
    }
  },
};
