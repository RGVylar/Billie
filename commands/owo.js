const faces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];
module.exports = {
    name: 'owo',
    description: 'This transforms your text in owotism!',
    execute: async (msg, args,options, bot, PREFIX) =>{
        try {
		    args = args.join(" ") || "What text want you to owoify?";
		    args = args.replace(/(?:r|l)/g, "w")
		      .replace(/(?:R|L)/g, "W")
		      .replace(/n([aeiou])/g, "ny$1")
		      .replace(/N([aeiou])/g, "Ny$1")
		      .replace(/N([AEIOU])/g, "NY$1")
		      .replace(/ove/g, "uv")
		      .replace(/!+/g, ` ${faces[Math.floor(Math.random() * faces.length)]} `)
		      .trim();
    		return msg.channel.send(args);
  		} catch (e) {
    		return msg.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
  		}
    },
};