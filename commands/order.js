const Discord = require('discord.js');
module.exports = {
    name: 'order',
    description: 'show monogatari order',
    execute(msg, args) {
      const exampleEmbed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('Monogatari series watch order')
      .setURL('https://media.discordapp.net/attachments/652432414135681060/662034140505571378/6gqy1AQaz0AXwlkBaVPMP-ST8fwleVWMLFXAcWkBHOM.png?width=617&height=904')
      //.setAuthor('Some name', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1', 'https://discord.js.org')
      .setDescription('Suggested watch order')
      .setThumbnail('https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1')
      .addField('Bakemonogatari', '15 Episodes', true)
      .addField('Kisumonogatari', '3 Movies', true)
      .addField('Nisemonogatari', '11 Episodes', true)
      .addField('Nekomonogatari', '4 Episodes', true)
      .addField('Monogatari series:\nsecond season', '25 Episodes (+3 Recaps)', true)
      .addField('Hanamonogatari', '5 Episodes', true)
      .addField('Tsukimonogatari', '4 Episodes', true)
      .addField('Owarimonogatari', '13 Episodes', true)
      .addField('(Alt) Kizumonogatari', '3 Movies (Alternative Placement)', true)
      .addField('Koyomimonogatari', '12 Hald-Episodes', true)
      .addField('Owarimonogatari\nSecond Season', '7 Episodes', true)
      .addField('Zoku Owarimonogatari', '6 Episodes', true)
      .setImage('https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');

      msg.channel.send(exampleEmbed);
    },
};
