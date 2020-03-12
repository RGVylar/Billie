const Discord = require('discord.js');
module.exports = {
    name: 'test',
    description: 'AzTest',
    execute(msg, args) {

        if (!msg.channel.nsfw) {
            const nsfwWrongChannelWarn = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('You lewd !')
                .setMessage('You need to be in a nsfw channel for that Baa~ Baka')
                .setImage("https://tenor.com/view/lewd-gif-7979947");

            msg.channel.send(nsfwWrongChannelWarn);
        }

        msg.delete();
    },
};