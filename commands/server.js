 const Discord = require('discord.js');
module.exports = {
  name: 'server',
  description: 'Shows user avatar (or users if command come with users as args)',
  execute(msg, args) {
    var server = msg.guild;
  
    const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField('ID', server.id)
    .addField('Region', server.region)
    .addField('Creado el', server.joinedAt.toDateString())
    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount)
    .addField('Roles', server.roles.size)
    .setColor(0x66b3ff)
    
   msg.channel.send({ embed });
  },
};

