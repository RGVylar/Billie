const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: 'test',
    description: 'AzTest',
    execute: async (msg, args) => {


        // Nsfw channel test
        if (!msg.channel.nsfw) {
            const nsfwWrongChannelWarn = new Discord.RichEmbed()
                .setColor('#FF0000')
                .setTitle('You lewd !')
                .setDescription('You need to be in a nsfw channel for that Baa~ Baka')
                .setImage("https://media1.tenor.com/images/8674cfb928b1055dd6b8227e7e61060b/tenor.gif?itemid=7979947");

            msg.channel.send(nsfwWrongChannelWarn);
        } else {

            // Image Feed
            if (!args || args == "") {
                // No tag then we take vanilla

                args = "vanilla";
                console.log(args);
            }


            console.log(args);
            var urlSearch = "https://danbooru.donmai.us/posts.json?search[tags]=" + args + "&random=true&raw";
            console.log(urlSearch);

            var postID;

            //// Get first page post with tag
            await fetch(urlSearch)
                .then(response => response.json())
                .then(data => {
                    msg.channel.send(data.length);
                    var seed = Math.floor(Math.random() * data.length - 1); 
                    msg.channel.send("In : " + data[seed].id + " - Seed : " + seed );
                    postID = data[seed].id;
                   
                })
                .catch(err => { msg.channel.send(err) });

            msg.channel.send("Out : " + postID);
            //Get Image


            var urlPost = "https://danbooru.donmai.us/posts/" + postID +".json?"
            await fetch(urlPost)
                .then(response => response.json())
                .then(data => { msg.channel.send("", { files: [data.file_url] }); })
                .catch(err => { msg.channel.send(err) });

            


        }


        msg.delete();
    },
};