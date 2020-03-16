const Discord = require('discord.js');
module.exports = {
  name: 'github',
  description: 'github!',
  execute(msg, args) {
  	const github = new Discord.RichEmbed()
  	.setColor('#d3d3d3 ')
      .setTitle('Billie BOT')
      .setURL('https://github.com/RGVylar/Billie')
      .setAuthor('Made by RGVylar', 'https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg', 'https://discord.gg/nE2wuh6')
      .setDescription('Suggested watch order')
      .setThumbnail('https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png')
      .addField('Develped by', 'RGVylar(Billie)\nAz')
      .addField('Hosting', 'Heroku')
      .addField('BBDD', 'MongoDB')
      .setImage('https://cdn.discordapp.com/avatars/683278717933453383/94953211657edbf9f841679da36ca535.png')
      .setFooter('Made by RGVylar', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
  	msg.channel.send(github);
  	},
};
