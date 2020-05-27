const config = require('../config.js');
const DEV = config.DEV;
module.exports = {
  name: 'poll',
  description: 'poll command, but, you must check the results, because is broken',
  execute(msg, args) {
    var text = args.join(' ');
    var parts = text.split('|');
    var options = parts[1].split(' ');
    var question = '**'+parts[0]+'**'+':\n';
    var time;
    if(parts[2]){
      time=parts[2]*1000;
    }
    else{
      time=6000;
    }
    var numbers = ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'];
    const reactions = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
    if(options[0]==''){options.splice(0,1);}
    if(options.length>11){
        msg.channel.send('Too much options. (max 9)');
    }
    else{
      var good=0;
        for (var i = 0; options.length - 1 >= i; i++) {
          if(options[i]!=''){
            question+=numbers[i]+' '+options[i]+'\n';
            ++good;
          }
        }
        question+='Time: **'+(time/1000)+'** seconds remaining\n';
        msg.channel.send(question)
            .then(async (sentMessage) => {
                for (var i=0; i < good; i++) {
                    await sentMessage.react(reactions[i]);
                }
                const filter = (reaction, user) => {
                    return true;
                };
                sentMessage.awaitReactions(filter, { time: time, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();
                        console.log(reaction.emoji);
                    })
                    .catch(collected => {
                        var high;
                        collected.map(reaction => {
                            if(!high){
                                high=reaction;
                            }
                            if(reaction.count>high.count){
                                high=reaction;
                            }
                        }); 
                        var pos = reactions.indexOf(high._emoji.name);
                        msg.channel.send("Time's up, winner is `"+options[pos]+"` with **"+(high.count-1)+"** votes");
                    });

            });;
        }
    
  },
};
