const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: 'test',
    description: 'AzTest',
    execute(msg, args) {


        // Nsfw channel test
        if (!msg.channel.nsfw) {
            const nsfwWrongChannelWarn = new Discord.RichEmbed()
                .setColor('#FF0000')
                .setTitle('You lewd !')
                .setDescription('You need to be in a nsfw channel for that Baa~ Baka')
                .setImage("https://media1.tenor.com/images/8674cfb928b1055dd6b8227e7e61060b/tenor.gif?itemid=7979947");

            msg.channel.send(nsfwWrongChannelWarn);
        }

        // Image Feed
        
        const list = fetch('https://danbooru.donmai.us/tags.json?search%5Bname_matches%5D=a*').then(response => response.json()).catch(err => msg.channel.send(err));

        msg.channel.send(list);

        msg.delete();
    },
};