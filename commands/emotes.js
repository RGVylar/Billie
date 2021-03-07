const { RichEmbed } = require("discord.js");
const react = ["⏪", "◀", "▶", "⏩"];
module.exports = {
    name: 'emotes',
    description: 'This is not working :(',
    execute: async (msg, args,options, bot, PREFIX) =>{
         try {
         	console.log(bot);
		    let emojis = msg.content.includes("--all") ? bot.emojis.cache : msg.guild.emojis.cache;
		    emojis = emojis.map(x => `${bot.emojis.cache.get(x.id) ? bot.emojis.cache.get(x.id).toString() : ""} | \`${bot.emojis.cache.get(x.id) ? bot.emojis.cache.get(x.id).toString() : ""}\``);
		    const chunks = bot.util.chunk(emojis, 10);
		    let index = 0;
		    const embed = new RichEmbed()
		      .setColor("RANDOM")
		      .setDescription(chunks[index].join("\n"))
		      .setFooter(`Page ${index + 1} of ${chunks.length}`);
		    function awaitReactions(m) {
		      const filter = (rect, usr) => react.includes(rect.emoji.name) && usr.id === msg.author.id;
		      m.createReactionCollector(filter, { time: 30000, max: 1 })
		        .on("collect", col => {
		          console.log(col.emoji.name);
		          const emo = col.emoji.name;
		          if (emo === react[0]) index -= 10;
		          if (emo === react[1]) index--;
		          if (emo === react[2]) index++;
		          if (emo === react[3]) index += 10;
		          index = ((index % chunks.length) + chunks.length) % chunks.length;
		          embed.setDescription(chunks[index].join("\n"));
		          embed.setFooter(`Page ${index + 1} of ${chunks.length}`);
		          m.edit(embed);
		          return awaitReactions(m);
		        });
		    }
		    const thisMess = await msg.channel.send(embed);
		    for (const r of react) {
		      await thisMess.react(r);
		    }
		    return awaitReactions(thisMess);
		  } catch (e) {
		  	console.log(bot.util);
		    msg.channel.send(`Oh no an error occured :( \`${bot.util.codeblock(e.stack, "ini")}\` try again later`);
		    return console.error(e);
		  }
    },
};