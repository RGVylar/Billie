const Discord = require('discord.js');
module.exports = {
  name: 'reddit',
  description: 'Spam from reddit!',
  execute(msg, args) {
  	const reddit = new Discord.MessageEmbed()
  	  .setColor('#e33500')
      .setTitle('Shinobunfriends')
      .setURL('https://www.reddit.com/r/Shinobunfriends/')
      .setAuthor('Made by RGVylar', 'https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png', 'https://www.twitch.tv/rgvylar')
      .setDescription('Join our community!')
      .setThumbnail('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg')
      .setImage('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/articles/article_5332c6291c17e5269d7dcba9183260a43b9a1daa86be206930cf60f85d2c6d58.jpg')
      .setFooter('Made by RGVylar', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
  	msg.channel.send(reddit);
  	},
};