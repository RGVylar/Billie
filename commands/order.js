const Discord = require('discord.js');
module.exports = {
    name: 'order',
    description: 'shows monogatari order',
    execute: async (msg, args, options, bot) =>{
        var functions = require('../functions/functions.js');
        var color='00ffff';
        if(msg.channel.type!='dm'){
          color = functions.getRoleColor(msg,bot);
        }
        let dice =  await functions.dice();
        if(dice==7){
          await functions.dio(msg,col);
        }
      else{
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle('Monogatari series watch order')
      .setURL('https://media.discordapp.net/attachments/652432414135681060/662034140505571378/6gqy1AQaz0AXwlkBaVPMP-ST8fwleVWMLFXAcWkBHOM.png?width=617&height=904')
      .setAuthor('Join Shinobu And Friends discord server!', 'https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg', 'https://discord.gg/nE2wuh6')
      .setDescription('Suggested watch order')
      .setThumbnail('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg')
      .addField('1. Bakemonogatari', '15 Episodes')
      .addField('2. Kizumonogatari', '3 Movies')
      .addField('3. Nisemonogatari', '11 Episodes')
      .addField('4. Nekomonogatari', '4 Episodes')
      .addField('5. Monogatari Series: Second Season', '25 Episodes (+3 Recaps)')
      .addField('6. Hanamonogatari', '5 Episodes')
      .addField('7. Tsukimonogatari', '4 Episodes')
      .addField('8. Owarimonogatari', '13 Episodes')
      .addField('9. Kizumonogatari', '3 Movies (Alternative Placement)')
      .addField('10.Koyomimonogatari', '12 Hald-Episodes')
      .addField('11.Owarimonogatari Second Season', '7 Episodes')
      .addField('12.Zoku Owarimonogatari', '6 Episodes')
      .setImage('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/articles/article_5332c6291c17e5269d7dcba9183260a43b9a1daa86be206930cf60f85d2c6d58.jpg')
      .setFooter('Made by RGVylar', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');

      msg.channel.send(exampleEmbed).then(sentEmbed => {
          sentEmbed.react('695769464444026930')
          sentEmbed.react('691973694343479338')
          sentEmbed.react('681620748770476122')
          sentEmbed.react('679788021008171055')
      });
    }
  },
};
