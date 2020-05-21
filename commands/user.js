 const Discord = require('discord.js');
module.exports = {
  name: 'user',
  description: 'Shows user info',
  execute(msg, args) {
    let userm = msg.mentions.users.first()
    if(!userm){
      var user = msg.author;
      
        const embed = new Discord.MessageEmbed()
        .setThumbnail(user.avatarURL({ dynamic: true, format: 'png', size: 512 }))
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL({ dynamic: true, format: 'png', size: 512 }))
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', msg.member.nickname, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', msg.member.joinedAt.toDateString())
        .addField('Roles', msg.member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))
        .setColor(0x66b3ff)
        
       msg.channel.send({ embed });
    }else{
      const embed = new Discord.MessageEmbed()
      .setThumbnail(userm.avatarURL())
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL({ dynamic: true, format: 'png', size: 512 }))
      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor(0x66b3ff)
      
     msg.channel.send({ embed });
    }
  },
};

