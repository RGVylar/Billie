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
  	var numbers = ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'];
  	if(options[0]==''){options.splice(0,1);}
  	console.log(options);
  	if(options.length>11){
  		msg.channel.send('Too much options. (max 9)');
  	}
  	else{
  		for (var i = 0; options.length - 1 >= i; i++) {
  			question+=numbers[i]+'='+options[i]+'\n';
	  	}
	  	msg.channel.send(question).then(sent => {
            for (var i = 0; options.length - 1 >= i; i++) {
  				sent.react(numbers[i]);
	  		}
	  		const filter = (reaction, user) => {
      		 return ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'].includes(reaction.emoji.name);
	    	};
		  	sent.awaitReactions(filter, {time: 60000, errors: ['time'] })
	    	.then(collected => {
	    		console.log(`Collected ${collected.size} reactions`)
	    		console.log(collected); 
		      	const reaction = collected.first();
		      	console.log(reaction);
		      	msg.channel.send('It works');
	      	}).catch(collected => {
	      		//console.log(collected);
	      		msg.reply('No, this poll didnt work');
	    	});
        });
	  	
	  	
  	}
  	

    /*sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
      const reaction = collected.first();
      if (reaction.emoji.name === '👍') {
        MongoClient.connect(MONGO, function(err, db) {
          if (err) throw err;
          var dbo = db.db(DB);
          var myquery = { col: col,url: gif };
          dbo.collection('media').insertOne(myquery, function(err, res) {
              if (err) throw err;
              db.close();
            }); 
          myquery = { url: gif };
          dbo.collection('suggestions').deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            msg.channel.send('`Suggestion accepted`');
            db.close();
          });
        });
      }
      else {
        MongoClient.connect(MONGO, function(err, db) {
          if (err) throw err;
          var dbo = db.db(DB);
          var myquery = { url: gif };
          dbo.collection('suggestions').deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            msg.channel.send('`Suggestion rejected`');
            db.close();
          });
        });
        
      }
    })
    .catch(collected => {
      //msg.reply('Admin reacted with neither a thumbs up, nor a thumbs down.');
    });*/
  },
};
