module.exports = {
    name: 'clapify',
    description: 'leet command!',
    execute: async (msg, args,options, bot, PREFIX) =>{
        try {
		    args = args.join(" ") || "What text want you to clapify?";
		    args = args.replace(/ /g, "👏");
		    args += "👏";
		    return msg.channel.send(`👏${args}`);
		  } catch (e) {
		    return msg.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
		  }
    },
};