module.exports = {
    name: 'pun',
    description: 'shows an error message :3',
    execute: async (msg, args,options, bot, PREFIX) =>{
        try {
        	console.log(bot.snek);
		    const { body } = await bot.snek.get("https://icanhazdadjoke.com/")
		      .set("Accept", "application/json");
		    return msg.channel.send(`📢 \`|\` **${body.joke.length ? body.joke : "Try again"}**`);
		  } catch (e) {
		    return msg.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
		  }
    },
};