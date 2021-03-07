const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports = {
    name: 'pun',
    description: 'shows an error message :3',
    execute: async (msg, args,options, bot, PREFIX) =>{
        let url = "https://icanhazdadjoke.com/slack";
        let joke;
        let permLink;
        fetch(url).then(res => res.json()).then(data => {
            joke = data.attachments[0].text;
            msg.channel.send(joke);
        });
    },
};