module.exports = {
    name: 'reverse',
    description: 'leet command!',
    execute: async (msg, args,options, bot, PREFIX) =>{
        try {
		    args = args.join(" ") || "What text want you to reversed?";
		    let reversed = "";
		    for (let i = args.length - 1; i >= 0; i--) {
		      reversed += args[i];
		    }
		    return msg.channel.send(reversed);
		  } catch (e) {
		    return msg.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
		  }
    },
};