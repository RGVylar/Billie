 const Discord = require('discord.js');
module.exports = {
  name: 'user',
  description: 'Shows user info',
  execute(msg, args, options, bot) {
        var functions = require('../functions/functions.js');
        var color='00ffff';
        var username;
        var joined;
        var roles;
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
          username=msg.member.nickname;
          joined=msg.member.joinedAt.toDateString()
          roles= msg.member.roles.cache.map(roles => `\`${roles.name}\``).join(', ');
        }
        else{
          username=msg.author.username;
          joined='This is not a server';
          roles=joined;
        }
    let userm = msg.mentions.users.first()
    if(!userm){
      var user = msg.author;
      
        const embed = new Discord.MessageEmbed()
        .setThumbnail(user.avatarURL({ dynamic: true, format: 'png', size: 512 }))
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL({ dynamic: true, format: 'png', size: 512 }))
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', username, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', joined)
        .addField('Roles', roles)
        .setColor(color)
        
       msg.channel.send({ embed });
    }else{
      const embed = new Discord.MessageEmbed()
      .setThumbnail(userm.avatarURL())
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL({ dynamic: true, format: 'png', size: 512 }))
      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor(color)
      
     msg.channel.send({ embed });
    }
  },
};

