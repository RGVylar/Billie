module.exports = {
    name: 'clapify',
    description: 'Say this wit more determination',
    execute: async (msg, args,options, bot, PREFIX) =>{
        try {
		    args = args.join(" ") || "What text want you to clapify?";
		    args = args.replace(/ /g, " 👏 ");
		    args += " 👏";
        	if(msg.channel.type=='dm'){
        		return msg.author.send(`👏 ${args}`);
        	}
        	else{
		    	return msg.channel.send(`👏 ${args}`);
        	}
		  } catch (e) {
		    return msg.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
		  }
    },
};