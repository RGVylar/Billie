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
      .setDescription('This part works?')
      .setThumbnail('https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1')
      .addField('Regular field title', 'Some value here')
      .addBlankField()
      .addField('Bakemonogatari', '15 Episodes', true)
      .addField('Kisumonogatari', '3 Movies', true)
      .addField('Nisemonogatari', '11 Episodes', true)
      .addField('Nekomonogatari', '4 Episodes', true)
      .addBlankField()
      .addField('Monogatari series:second season', '25 Episodes (+3 Recaps)', true)
      .addField('Nisemonogatari', '11 Episodes', true)
      .addField('Nisemonogatari', '11 Episodes', true)
      .addField('Nisemonogatari', '11 Episodes', true)
      .addBlankField()
      .addField('Bakemonogatari', '15 Episodes', true)
      .addField('Nisemonogatari', '11 Episodes', true)
      .addField('Nisemonogatari', '11 Episodes', true)
      .addField('Nisemonogatari', '11 Episodes', true)
      .setImage('https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://cdn.discordapp.com/emojis/679413153423163392.gif?v=1');

      msg.channel.send(exampleEmbed);
    },
};
