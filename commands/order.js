const Discord = require('discord.js');
module.exports = {
    name: 'order',
    description: 'show monogatari order',
    execute(msg, args) {
      const exampleEmbed = new Discord.RichEmbed()
      .setColor('#ffff00')
      .setTitle('Monogatari series watch order')
      .setURL('https://media.discordapp.net/attachments/652432414135681060/662034140505571378/6gqy1AQaz0AXwlkBaVPMP-ST8fwleVWMLFXAcWkBHOM.png?width=617&height=904')
      .setAuthor('Join our server!', 'https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg', 'https://discord.gg/nE2wuh6')
      .setDescription('Suggested watch order')
      .setThumbnail('https://cdn.discord.me/server/99cc19f10df5da7c09263ff47437dd8a700275be98bf88ae8c0c360a4ea0176d/icon_c47e9a6c64d7043618d92c7fb6125d1268f6a40497490ea377d9bba4bef12a27.jpg')
      .addField('1. Bakemonogatari', '15 Episodes')
      .addField('2. Kizumonogatari', '3 Movies')
      .addField('3. Nisemonogatari', '11 Episodes')
      .addField('4. Nekomonogatari', '4 Episodes')
      .addField('5. Monogatari series:\nsecond season', '25 Episodes\n(+3 Recaps)')
      .addField('6. Hanamonogatari', '5 Episodes')
      .addField('7. Tsukimonogatari', '4 Episodes')
      .addField('8. Owarimonogatari', '13 Episodes')
      .addField('9. Kizumonogatari', '3 Movies\n(Alternative Placement)', true)
      .addField('10.Koyomimonogatari', '12 Hald-Episodes', true)
      .addField('11.Owarimonogatari\nSecond Season', '7 Episodes', true)
      .addField('12.Zoku Owarimonogatari', '6 Episodes', true)
      //.setImage('https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1')
      //.setTimestamp()
      .setFooter('Made by RGVylar', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');

      msg.channel.send(exampleEmbed);
    },
};
