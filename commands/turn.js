const Discord = require('discord.js');
module.exports = {
  name: 'turn',
  description: 'Turn!',
  execute(msg, args) {
        var dioce = Math.floor( Math.random() * 10 ) +1;
        if(dioce==7){
          const exampleEmbed = new Discord.RichEmbed()
                .setColor('#ffff00')
                .setTitle(`You were expecting an undress anime gif, but it was me, Dio!`)
                .setImage('https://cdn.discordapp.com/attachments/687651655256375356/689757667027451919/1536245378_lYNXpYX.gif');
              return msg.channel.send(exampleEmbed);
        }
      else{
    msg.reply('End his turn');
   	if(msg.member.id==399925589290647552){msg.channel.send('<@273081779420921856> Now is your turn!');}
   	if(msg.member.id==273081779420921856){msg.channel.send('<@399925589290647552> Now is your turn!');}
   	if((msg.member.id!=273081779420921856)&&(msg.member.id!=399925589290647552)){msg.channel.send('...but...who are you?');}
    msg.delete();
    }
  },
};
