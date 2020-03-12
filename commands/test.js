const Discord = require('discord.js');
module.exports = {
    name: 'test',
    description: 'AzTest',
    execute(msg, args) {
        //var gifs = ["
        //];
        //var randomIndex = Math.floor(Math.random() * gifs.length);
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Random Test');
            //.setImage(gifs[randomIndex]);

        msg.channel.send(exampleEmbed);
    },
};