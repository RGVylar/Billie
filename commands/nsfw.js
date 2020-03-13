const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: 'nsfw',
    description: 'AzTest',
    execute: async (msg, args) => {

        var error = false;

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

                args.push('');
            }

            // Get the rating request
            var rating = [];
            var ratingString = [];

            if (args.includes('-e')) {
                rating.push('e');
                ratingString.push('Explicit');
                args.splice(args.indexOf('-e'), 1);
            }

            if (args.includes('-q')) {
                rating.push('q');
                ratingString.push('Questionable');
                args.splice(args.indexOf('-q'), 1);
            }

            if (args.includes('-s')) {
                rating.push('s');
                ratingString.push('Safe');
                args.splice(args.indexOf('-s'), 1);
            }

            console.log(args);


            // filter the tags, nbr of tag must be < 2

            var listArgsDelete;
            if (args.length > 2) {
                listArgsDelete = args.splice(2, args.length - 2);

            } else {
                listArgsDelete = "";
            }



            var urlTag = args.join('+');
            console.log(urlTag);
            
            var urlSearch = "https://danbooru.donmai.us/posts.json?limit=50&random=true&raw=true&tags=" + urlTag;
            console.log(urlSearch);

            var postID;

            //// Select the post with tag
            await fetch(urlSearch)
                .then(response => response.json())
                .then(data => {
                    if (data.length == 0) {
                                const postEmbed = new Discord.RichEmbed()
                                    .setColor('#FF0000')
                                    .setTitle('Error')
                                    .setDescription("No image with those tags : " + args)
                                    .setImage('https://vqgazmo.yrhfibxjbtvw.hath.network:1298/h/ef870055f5d3063030868f9dabb19ba76f17b583-20809-512-288-jpg/keystamp=1584103200-96f49dde50;fileindex=67809191;xres=org/0126d1a112f09cc260c8ec0063113bfc9a5b8b5dr1_1136_640v2_00.jpg');
                        msg.channel.send(postEmbed);
                        error = true;
                        return;
                    }
                    var seed = Math.floor(Math.random() * data.length - 1); 

                    // Get a post with the right rating
                    if (rating.length > 0) {
                        console.log("Getting post with right rating");

                        while (!rating.includes(data[seed].rating)) {
                            seed = Math.floor(Math.random() * data.length - 1);
                        }
                        console.log("Post with right rating  : " + data[seed].id);
                    }

                    postID = data[seed].id;
                    console.log("Post ID : " + postID);

                })
                .catch(err => { msg.channel.send(err) });

            if (!error) {
                //Get Image

                console.log('Getting Image Object');

                var urlPost = "https://danbooru.donmai.us/posts/" + postID + ".json?"

                console.log('URL Image Object : ' + urlPost);

                await fetch(urlPost)
                    .then(response => response.json())
                    .then(data => {
                        const postEmbed = new Discord.RichEmbed()
                            .setColor('#ffc0cb')
                            .setURL('https://danbooru.donmai.us/posts/' + postID)
                            .setTitle(data.tag_string_artist)
                            .setDescription('Tags : ' + args + "\rFilters : " + ratingString)
                            .setImage(data.file_url);
                            //.addField('Tags : ', " " + args)
                            //.addField('Tags deleted : ', " " + listArgsDelete)
                            //.addBlankField()
                            //.addField('Filters : ', " " + ratingString);
                            

                        console.log("Id Post : " + data.id);
                        console.log("URL Post : " + data.file_url);

                        console.log('Sending embed with image');

                        msg.channel.send(postEmbed);
                    })
                    .catch(err => { msg.channel.send(err) });
            }
        }


        msg.delete();
    },
};