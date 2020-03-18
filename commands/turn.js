const Discord = require('discord.js');
const config = require("../config.js");
const DEV = config.DEV;
module.exports = {
  name: 'turn',
  description: 'Turn!',
  execute(msg, args) {
        var dioce = Math.floor( Math.random() * 10 ) +1;
        if(dioce==7){
          const exampleEmbed = new Discord.RichEmbed()
                .setColor('#ffff00')
                .setTitle(`You were expecting the turn, but it was me, Dio!`)
                .setImage('https://cdn.discordapp.com/attachments/687651655256375356/689757667027451919/1536245378_lYNXpYX.gif');
              return msg.channel.send(exampleEmbed);
        }
      else{
    msg.reply('End his turn');
   	if(msg.member.id==DEV){msg.channel.send('<@'+DEV+'> Now is your turn!');}
   	if(msg.member.id==273081779420921856){msg.channel.send('<@'+DEV+'> Now is your turn!');}
   	if((msg.member.id!=273081779420921856)&&(msg.member.id!=DEV)){msg.channel.send('...but...who are you?');}
    msg.delete();
    }
  },
};
