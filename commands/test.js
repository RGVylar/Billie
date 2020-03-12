const Discord = require('discord.js');
module.exports = {
    name: 'test',
    description: 'AzTest',
    execute(msg, args) {
        var prefix = 'sv_'+name;
        if (!msg.content.startsWith(prefix) || msg.author.bot) return;

        args = msg.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

        if (command === 'args-info') {
            if (!args.length) {
                return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
            }

            msg.channel.send(`Command name: ${command}\nArguments: ${args}`);

        }
        //const exampleEmbed = new Discord.RichEmbed()
        //    .setColor('#0099ff')
        //    .setTitle('Random Test');

        //    //.setImage(gifs[randomIndex]);

        //msg.channel.send(exampleEmbed);
        msg.delete();
    },
};