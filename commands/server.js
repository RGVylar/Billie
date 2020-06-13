 const Discord = require('discord.js');
module.exports = {
  name: 'server',
  description: 'Shows server information',
  execute(msg, args, options, bot) {
    if(msg.channel.type!='dm'){
      var functions = require('../functions/functions.js');
      var color = functions.getRoleColor(msg,bot);
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
      .setColor(color)
      
     msg.channel.send({ embed });
    }
    else{
      msg.author.send('This is a server only command');
    }
        
  },
};

