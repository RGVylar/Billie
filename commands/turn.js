const Discord = require('discord.js');
const config = require("../config.js");
const DEV = config.DEV;
const DEV4 = config.DEV4;
module.exports = {
  name: 'turn',
  description: 'Turn!',
  execute(msg, args) {
    var dioce = Math.floor( Math.random() * 10 ) +1;
    if(dioce==7){
      const exampleEmbed = new Discord.RichEmbed()
      .setColor('#ffff00')
      .setTitle(`You were expecting the turn, but it was me, Dio!`)
      .setImage('https://cdn.discordapp.com/attachments/682860137316220928/689793060258971750/1532018000_Tumblr_o0i5tcPs2o1s0527so1_500.gif');
      return msg.channel.send(exampleEmbed);
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
