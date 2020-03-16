module.exports = {
  name: 'sauce',
  description: 'sauce!',
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
    else {
        if (!args || args == "") {
    		msg.reply('But, give me the holy numbers!');
        }
        else {
    		msg.reply('https://nhentai.net/g/' + args + '/');       	
        }
    }
  },
};
