const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
  lewd: function (msg) {
    const nsfwWrongChannelWarn = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTitle('You lewd !')
    .setDescription('You need to be in a nsfw channel for that Baa~ Baka')
    .setImage("https://media1.tenor.com/images/8674cfb928b1055dd6b8227e7e61060b/tenor.gif?itemid=7979947");
    msg.channel.send(nsfwWrongChannelWarn); 
  },
  oneUser: function (msg) {
    var user = msg.member.user.tag;
    var n = user.indexOf('#');
    var res = user.substring(0, n);
    return res;   
  },
  dice: function (msg) {
    var dice = Math.floor( Math.random() * 20 ) +1;
    return dice;   
  },
  dio: function (msg,col) {
    const embed = new Discord.RichEmbed()
    .setColor('#ffff00')
    .setTitle('You were expecting a '+col+' anime gif, but it was me, Dio!')
    .setImage('https://cdn.discordapp.com/attachments/682860137316220928/689793060258971750/1532018000_Tumblr_o0i5tcPs2o1s0527so1_500.gif');
    msg.channel.send(embed); 
  },
  query: function (msg,args,col,quote) {
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
              if(typeof gif === 'object'){
                gif=gif[0];
              }
              const embed = new Discord.RichEmbed()
              .setColor('#0099ff')
              .setTitle(quote)
              .setImage(gif);
              msg.channel.send(embed);
              ask(msg,gif);
            }
            else{
              msg.channel.send('There are not '+col+' gifs yet!');
            }
            db.close();
          });
        }
        else {
          msg.channel.send('This '+col+' is not defined');
        }
        db.close();
      }); 
    }); 
  },
  multiquery: function (msg,args,col,param0,param1) {
    const userlist = msg.mentions.users.map(user => {
      const usera = msg.member.user.tag;
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
          if(usera==userb){
            msg.channel.send("Find someone else :(");
          }
          else if(whitelisted){
            const embed = new Discord.RichEmbed()
            .setColor('#0000FF')
            .setTitle(`Who? Someone who doesn't want to be bothered?`)
            .setImage('https://media1.tenor.com/images/23be03bcbba3a14fe95c6db874035bf3/tenor.gif?itemid=7729085');
            msg.delete();
            msg.channel.send(embed);  
          }
          else {
            console.log(result);
            var quote='';
            const a = usera.indexOf("#");
            const b = userb.indexOf("#");
            const  resa = usera.substring(0, a);
            const  resb = userb.substring(0, b);
            if(typeof param1 != 'undefined'){
              quote=param0+` ${resb} `+param1;
            }
            else{
              quote=param0+` ${resb}`;
            }
            var randomIndex = Math.floor(Math.random() * result.length); 
            var gif = result[randomIndex].url;
            if(typeof gif === 'object'){
              gif=gif[0];
            }
            const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle(quote)
            .setImage(gif);
            msg.channel.send(embed);
            ask(msg,gif);
          }
          db.close();
        });
      });
    });
  },
  insert: function (msg,url,col) {
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
            msg.channel.send('1 '+col+' inserted');
            db.close();
          });
        }
        db.close();
      });
    });
  },
  newCommand: function (msg,command) {
    MongoClient.connect(MONGO, function(err, db) {
      if (err) throw err;
      var dbo = db.db(DB);
      dbo.createCollection('commands', function(err, res) {
        if (err) {
        }
        if(typeof res !== 'undefined'){
          dbo.collection('commands').insertOne(command, function(err, res) {
            if (err) throw err;
            const consent = new Discord.RichEmbed()
            .setColor('#d3d3d3 ')
            .setTitle('New command')
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
            msg.channel.send(obj.result.n + " **"+col+"** deleted");
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
function ask(msg,gif) {
  if(msg.member.id==DEV){
    msg.react('👍').then(() => msg.react('👎'));
    const filter = (reaction, user) => {
      return ['👍', '👎'].includes(reaction.emoji.name) && user.id === msg.author.id;
    };

    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
      const reaction = collected.first();
      if (reaction.emoji.name === '👍') {
        msg.channel.send('Admin likes this gif');
      }
      else {
        MongoClient.connect(MONGO, function(err, db) {
          if (err) throw err;
          var dbo = db.db(DB);
          var myquery = { url: gif };
          dbo.collection('media').deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            msg.channel.send('Admin deleted a gif');
            db.close();
          });
        });
      }
    })
    .catch(collected => {
      msg.reply('Admin reacted with neither a thumbs up, nor a thumbs down.');
    });
  }  
}