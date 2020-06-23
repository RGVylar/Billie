const config = require("../config.js");
const DEV = config.DEV;
module.exports = {
    name: 'purge',
    description: 'Purge command, to purge things',
    execute: async (msg, args) => {
        console.log(msg.guild.owner);
        if(msg.member.id==DEV||msg.guild.owner){

            if(args.includes('-m')){
                args.splice(args.indexOf('-m'), 1);
                
                msg.channel.messages.fetch()
                .then(messages => 
                    msg.channel.send('**'+messages.filter(m => m.content.includes(args[0])).size+'** messages deleted'))
                .catch(console.error);   
                msg.channel.messages.fetch()
                .then(messages => 
                    msg.channel.bulkDelete(messages.filter(m => m.content.includes(args[0]))))
                .catch(console.error);   
            }
            else if (msg.mentions.users.size == 0){
                const amount = args.join(' '); // Amount of messages which should be deleted
                if (!amount) return msg.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the amount parameter is given
                if (isNaN(amount)) return msg.reply('The amount parameter isn\'t a number!'); // Checks if the amount parameter is a number. If not, the command throws an error
                if (amount > 100) return msg.reply('You can\'t delete more than 100 messages at once!'); // Checks if the amount integer is bigger than 100
                if (amount < 1) return msg.reply('You have to delete at least 1 message!'); // Checks if the amount integer is smaller than 1
                    await msg.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
                        msg.channel.bulkDelete(messages.size)
                    });
                    msg.channel.send('**'+amount+'** messages deleted');
            }
            else{
                    const avatarList = msg.mentions.users.map(user => {
                        msg.channel.messages.fetch()
                        .then(messages => 
                            msg.channel.send('**'+messages.filter(m => m.author.id === user.id).size+'** `'+user.tag+'` messages deleted'))
                        .catch(console.error);   
                        msg.channel.messages.fetch()
                        .then(messages => 
                            msg.channel.bulkDelete(messages.filter(m => m.author.id === user.id)))
                        .catch(console.error);   
                    });
            }
        }
        else{
            msg.reply('You don\'t have permission to delete messages');
        }
    },
};