const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
  getRoleColor: function(msg,bot) {
    const guilid=msg.guild.id;
    const guild = bot.guilds.resolve(guilid);
    const user = guild.member(bot.user);
    const color = user.roles.highest.color;
    return color;
  },
  lewd: function (msg) {
    const nsfwWrongChannelWarn = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle('You lewd !')
    .setDescription('You need to be in a nsfw channel for that Baa~ Baka')
    .setImage("https://media1.tenor.com/images/8674cfb928b1055dd6b8227e7e61060b/tenor.gif?itemid=7979947");
    msg.channel.send(nsfwWrongChannelWarn); 
  },
  oneUser: function (msg) {
    var user;
    var res;
    if(msg.channel.type=='dm'){
      user = msg.author;
      res=user.username;
    }
    else{
      user= msg.member.user.tag;
      var n = user.indexOf('#');
      res = user.substring(0, n);
    }
    return res;   
  },
  dice: function (msg) {
    var dice = Math.floor( Math.random() * 20 ) +1;
    return dice;   
  },
  dio: function (msg,col) {
    const embed = new Discord.MessageEmbed()
    .setColor('#ffff00')
    .setTitle('You were expecting a **'+col+'**, but it was me, Dio!')
    .setImage('https://cdn.discordapp.com/attachments/682860137316220928/689793060258971750/1532018000_Tumblr_o0i5tcPs2o1s0527so1_500.gif');
    msg.channel.send(embed); 
  },
  query: function (msg,args,col,quote,color) {
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db(DB);
      dbo.createCollection('media', function(err, res) {
        if (err) {
        }
        if(typeof res !== 'undefined'){
          var query = {col:col};
          dbo.collection('media').find(query).toArray(function(err, result) {
            if (err) throw err;
            if(typeof result[0] !== 'undefined'){
              var randomIndex = Math.floor(Math.random() * result.length); 
              var gif = result[randomIndex].url;
              /*if(typeof gif === 'object'){
                gif=gif[0];
              }*/
              const embed = new Discord.MessageEmbed()
              .setColor(color)
              .setTitle(quote)
              .setImage(gif);
              
            msg.channel.send(embed).then(sentEmbed => {
            ask(msg,gif,sentEmbed,col);
          });
            }
            else{
              msg.channel.send('There are not **'+col+'s** yet!');
            }
            db.close();
          });
        }
        else {
          msg.channel.send('This **'+col+'** is not defined');
        }
        db.close();
      }); 
    }); 
  },
  count: function (msg,args,col) {
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db(DB);
      dbo.createCollection('media', function(err, res) {
        if (err) {
        }
        if(typeof res !== 'undefined'){
          var query = {col:col};
          dbo.collection('media').find(query).toArray(function(err, result) {
            if (err) throw err;
            if(typeof result[0] !== 'undefined'){ 
              msg.channel.send('**'+result.length+'** `'+col+'` results');
            }
            else{
              msg.channel.send('There are not **'+col+'s** yet!');
            }
            db.close();
          });
        }
        else {
          msg.channel.send('This **'+col+'** is not defined');
        }
        db.close();
      }); 
    }); 
  },
  check: function (msg, color) {
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db(DB);
      dbo.createCollection('media', function(err, res) {
        if (err) {
        }
        if(typeof res !== 'undefined'){
          dbo.collection('suggestions').find({}).toArray(function(err, result) {
            if (err) throw err;
            if(typeof result[0] !== 'undefined'){ 
              var gif = result[0].url;
              var col = result[0].col;
              const embed = new Discord.MessageEmbed()
              .setColor(color)
              .setTitle('Suggested '+col)
              .setFooter(''+((result.length)-1)+' suggestions left')
              .setImage(gif);
            msg.channel.send(embed).then(sentEmbed => {
            validate(msg,gif,col,sentEmbed);
            });
            }
            else{
              msg.channel.send('There are not more suggestions!');
            }
            db.close();
          });
        }
        else {
          msg.channel.send('This suggestions is not defined');
        }
        db.close();
      }); 
    }); 
  },
  tcheck: function (msg,color) {
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db(DB);
      dbo.createCollection('textggestions', function(err, res) {
        if (err) {
        }
        if(typeof res !== 'undefined'){
          dbo.collection('textggestions').find({}).toArray(function(err, result) {
            if (err) throw err;
            if(typeof result[0] !== 'undefined'){ 
              var text = result[0].suggestion;
              const embed = new Discord.MessageEmbed()
              .setColor(color)
              .setTitle('Suggestion:')
              .setDescription(text.join(' '))
              .setFooter(''+((result.length)-1)+' suggestions left');
            
            msg.channel.send(embed).then(sentEmbed => {
            task(msg,text,sentEmbed);
          });
            }
            else{
              msg.channel.send('There are not more suggestions!');
            }
            db.close();
          });
        }
        else {
          msg.channel.send('This suggestions is not defined');
        }
        db.close();
      }); 
    }); 
  },
  multiquery: function (msg,args,col,quote,color) {
    const userlist = msg.mentions.users.map(user => {
    var usera;
    if(msg.channel.type=='dm'){
      var user = msg.author;
      var tag = msg.discriminator;
      usera=user+'#'+tag;
    }
    else{
      usera = msg.member.user.tag;
    } 
      const userb = user.tag;
      const id = user.id;
      var whitelisted = MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        var query = { user: id };
        dbo.collection("whitelist").find(query).toArray(function(err, result) {
          if (err) throw err;
          if(typeof result[0] !== 'undefined'){
            if(result[0].user==id){
              whitelisted=true;
            } 
          }
          db.close();
        });
      });
      MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        var action = {col:col};
        dbo.collection('media').find(action).toArray(function(err, result) {
          if (err) throw err;

          if(typeof result[0] !== 'undefined'){
            if(result[0].user==id){
              whitelisted=true;
            } 
          
          if(usera==userb){
            msg.channel.send("I mean, that is sad, loser, find a Billie");
          }
          else if(whitelisted){
            const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle(`Who? Someone who doesn't want to be bothered?`)
            .setImage('https://media1.tenor.com/images/23be03bcbba3a14fe95c6db874035bf3/tenor.gif?itemid=7729085');
            msg.delete();
            msg.channel.send(embed);  
          }
          else {
            const a = usera.indexOf("#");
            const b = userb.indexOf("#");
            const  resa = usera.substring(0, a);
            const  resb = userb.substring(0, b);
            quote=quote+` ${resb}`;
            var randomIndex = Math.floor(Math.random() * result.length); 
            var gif = result[randomIndex].url;
            if(typeof gif === 'object'){
              gif=gif[0];
            }
            const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle(quote)
            .setImage(gif);
            msg.channel.send(embed).then(sentEmbed => {
            ask(msg,gif,sentEmbed,col)
          });
          }}else{msg.channel.send('There are not **'+col+'s** yet');}
          db.close();
        });
      });
    });
  },
  insert: function (msg,col,url) {
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db(DB);
      var myobj = { col:col, url:url };
      dbo.createCollection('media', function(err, res) {
        if (err) {
        }
        if(typeof res !== 'undefined'){
          dbo.collection('media').insertOne(myobj, function(err, res) {
            if (err) throw err;
            msg.channel.send('**1** `'+col+'` inserted');
            db.close();
          });
        }
        else{
          msg.channel.send('res undefined');
        }
        db.close();
      });
    });
  },
  suggest: function (msg,col,url) {
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db(DB);
      var myobj = { col:col, url:url };
      dbo.createCollection('suggestions', function(err, res) {
        if (err) {
        }
        if(typeof res !== 'undefined'){
          dbo.collection('suggestions').insertOne(myobj, function(err, res) {
            if (err) throw err;
            msg.channel.send('**1** `'+col+'` suggested');
            db.close();
          });
        }
        else{
          msg.channel.send('res undefined');
        }
        db.close();
      });
    });
  },
  textggest: function (msg,args) {
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db(DB);
      var myobj = { suggestion:args };
      dbo.createCollection('textggestions', function(err, res) {
        if (err) {
        }
        if(typeof res !== 'undefined'){
          dbo.collection('textggestions').insertOne(myobj, function(err, res) {
            if (err) throw err;
            msg.channel.send('**1** text suggested');
            db.close();
          });
        }
        else{
          msg.channel.send('res undefined');
        }
        db.close();
      });
    });
  },
  newCommand: function (msg,command,color) {
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db(DB);
      dbo.createCollection('commands', function(err, res) {
        if (err) {
        }
        if(typeof res !== 'undefined'){
          dbo.collection('commands').insertOne(command, function(err, res) {
            if (err) throw err;
            const consent = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('New command: '+command.col)
            .addField('Name', command.col)
            .addField('Description', command.description)
            .addField('Type', command.type)
            .addField('Rate', command.rate)
            .addField('Quote', command.quote);
            msg.channel.send(consent);
            db.close();
          });
        }
        db.close();
      });
    });
  },
  delCommand: function (msg,col) {
    MongoClient.connect(MONGO, function(err, db) {
          if (err) throw err;
          var dbo = db.db(DB);
          var myquery = { col:col };
          dbo.collection('media').deleteMany(myquery, function(err, obj) {
            if (err) throw err;
            msg.channel.send('**'+obj.result.n + "** `"+col+"` deleted");
            db.close();
          });
          dbo.collection('commands').deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            msg.channel.send('Command **'+col+'** deleted');

            db.close();
      });
    });
  },
};
function ask(msg,gif,sentEmbed,col) {
  //if(msg.member.id==DEV){
    sentEmbed.react('👍').then(() => sentEmbed.react('👎'));
    const filter = (reaction, user) => {
      return ['👍', '👎'].includes(reaction.emoji.name) && user.id === DEV;
    };

    sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
      const reaction = collected.first();
      console.log(collected);
      console.log(collected.first());
      if (reaction.emoji.name === '👍') {
        msg.channel.send('Dev liked this `'+col+'`');
      }
      else {
        MongoClient.connect(MONGO, function(err, db) {
          if (err) throw err;
          var dbo = db.db(DB);
          var myquery = { url: gif };
          dbo.collection('media').deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            msg.channel.send('Dev deleted this `'+col+'`');
            db.close();
          });
        });
      }
    })
    .catch(collected => {
      //msg.reply('Admin reacted with neither a thumbs up, nor a thumbs down.');
    });
  //}  
}
function task(msg,text,sentEmbed) {
  //if(msg.member.id==DEV){
    sentEmbed.react('👍').then(() => sentEmbed.react('👎'));
    const filter = (reaction, user) => {
      return ['👍', '👎'].includes(reaction.emoji.name) && user.id === DEV;
    };

    sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
      const reaction = collected.first();
      console.log(collected);
      console.log(collected.first());
      if (reaction.emoji.name === '👍') {
        msg.channel.send('Dev liked this suggestion');
      }
      else {
        MongoClient.connect(MONGO, function(err, db) {
          if (err) throw err;
          var dbo = db.db(DB);
          var myquery = { suggestion: text };
          dbo.collection('textggestions').deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            msg.channel.send('Dev deleted this suggestion');
            db.close();
          });
        });
      }
    })
    .catch(collected => {
      //msg.reply('Admin reacted with neither a thumbs up, nor a thumbs down.');
    });
  //}  
}
function validate(msg,gif,col,sentEmbed) {
  //if(msg.member.id==DEV){
    sentEmbed.react('👍').then(() => sentEmbed.react('👎'));
    const filter = (reaction, user) => {
      return ['👍', '👎'].includes(reaction.emoji.name) && user.id === DEV;
    };

    sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
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
    });
  //}  
}