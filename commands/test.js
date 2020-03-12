const Discord = require('discord.js');
module.exports = {
    name: 'test',
    description: 'AzTest',
    execute(msg, args) {
        
        msg.channel.send(`Args value : ${args}`);
        var prefix = 'sv_' + this.name;
        if (!msg.content.startsWith(prefix) || msg.author.bot) {
            msg.channel.send(`error you mother fockor : ${prefix}` );
            return;
        }
        msg.delete();
    },
};