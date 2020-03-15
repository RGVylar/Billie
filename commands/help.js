const Discord = require('discord.js');
const config = require("../config.js");
const MongoClient = require('mongodb').MongoClient;
module.exports = {
  name: 'help',
  description: 'list of commands',
  execute(msg, args) {
      const MONGO = config.MONGO;
      MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db("billie");
        dbo.collection("config").find({}).toArray(function(err, result) {
          if (err) throw err;
          var res = result[0].prefix;
          var PREFIX  = res[0];
          //Commands 55
          //SAFE commands 25
          const commands = new Discord.RichEmbed()
          .setColor('#99cc00')
          .setTitle('Commands')
          .setDescription('The list of commands')
          .setThumbnail('https://cdn.discordapp.com/avatars/683278717933453383/94953211657edbf9f841679da36ca535.png?size=2048')
          .addField( PREFIX + 'sa', 'Super sacred command', true)
          .addField( PREFIX + 'cry', 'Cry like a baby', true)
          .addField( PREFIX + 'dab', 'Dab to the haters', true)
          .addField( PREFIX + 'say', 'Say something', true)
          .addField( PREFIX + 'hug', 'Hug someone', true)
          .addField( PREFIX + 'rps', 'Play rock, paper scissors', true)
          .addField( PREFIX + 'tea', 'Drink some tea', true)
          .addField( PREFIX + 'coin', 'Flips a coin', true)
          .addField( PREFIX + 'help', 'Show this list...', true)
          .addField( PREFIX + 'ping', 'Checks your ping', true)
          .addField( PREFIX + 'turn', 'This one is secret', true)
          .addField( PREFIX + 'dice', 'Gives a number from 0 to ?', true)
          .addField( PREFIX + 'date', 'Gives the date', true)
          .addField( PREFIX + 'kick', 'Kick someone', true)
          .addField( PREFIX + 'kiss', 'Kiss someone (-l makes it better)', true)
          .addField( PREFIX + 'loli', 'Are you sure about this one?', true)
          .addField( PREFIX + 'dance', 'Dance, dance `til you`re dead', true)
          .addField( PREFIX + 'punch', 'Punch someone', true)
          .addField( PREFIX + 'urban', 'Show a SFW definition', true)
          .addField( PREFIX + 'order', 'Show monogatari watch order', true)
          .addField( PREFIX + 'lolito', 'OMG LOLITO', true)
          .addField( PREFIX + 'cursed', 'Show cursed images', true)
          .addField( PREFIX + 'attach', 'This is an example', true)
          .addField( PREFIX + 'avatar', 'Show the avatars', true)
          .addField( PREFIX + 'translate', 'Translates something', true)
          .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
          msg.channel.send(commands);

          if(msg.member.roles.find(r => r.name === "tester")){

            //ADMIN Commands 12
            const admin = new Discord.RichEmbed()
            .setColor('#99cc00')
            .setTitle('Admin Commands')
            .setDescription('The list of the Admin commands')
            .setThumbnail('https://cdn.discordapp.com/avatars/684090225198235697/25f8ae4bff68cfcf0b1c3b6b5e3a6843.png?size=2048')
            .addField( PREFIX + 'scry', 'Adds cry gif to the cry command', true)
            .addField( PREFIX + 'sdab', 'Adds dab gif to the dab command', true)
            .addField( PREFIX + 'shug', 'Adds hug gif to the hug command', true)
            .addField( PREFIX + 'stea', 'Adds tea gif to the tea command', true)
            .addField( PREFIX + 'punch', 'Adds punch gif to the punch command', true)
            .addField( PREFIX + 'purge', 'Removes n messages', true)
            .addField( PREFIX + 'skiss', 'Adds kiss gif to the kiss command', true)
            .addField( PREFIX + 'skick', 'Adds kick gif to the kick command', true)
            .addField( PREFIX + 'sdance', 'Adds dance gif to the dance command', true)
            .addField( PREFIX + 'prefix', 'Changes the prefix', true)
            .addField( PREFIX + 'scursed', 'Adds cursed gif to the cursed command', true)
            .addField( PREFIX + 'newcommand', 'Adds a new command', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
            msg.channel.send(admin);

          }

          //Music Commands 3
          const music = new Discord.RichEmbed()
          .setColor('#0099ff')
          .setTitle('Music Commands')
          .setDescription('The list of Music commands')
          .setThumbnail('https://cdn.discordapp.com/emojis/615236186868416524.gif?v=1')
          .addField( PREFIX + 'join', 'Bot joins to your channel', true)
          .addField( PREFIX + 'stop', 'Bot leaves your channel', true)
          .addField( PREFIX + 'play', 'Bot plays or adds song to the queue', true)
          .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
          msg.channel.send(music);

          if (!msg.channel.nsfw) {  

            //NSFW Commands 0
            const nsfw = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands NSFW')
            .setDescription('The list of NSFW commands')
            .setThumbnail('https://media1.tenor.com/images/8674cfb928b1055dd6b8227e7e61060b/tenor.gif?itemid=7979947')
            .addField( 'NSFW Commands in this channel', 'Please, ask for the commands on a NSFW channel', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
            msg.channel.send(nsfw);

            if(msg.member.roles.find(r => r.name === "tester")){

              //ADMIN NSFW Commands 6
              const adminNsfw = new Discord.RichEmbed()
              .setColor('#FF0000')
              .setTitle('Admin nsfw Commands')
              .setDescription('The list of NSFW Admin commands')
              .setThumbnail('https://cdn.discordapp.com/emojis/659923986523750412.png?v=1')
              .addField( PREFIX + 'scum', 'Adds cum gif to the cry command', true)
              .addField( PREFIX + 'ssuck', 'Adds suck gif to the suck command', true)
              .addField( PREFIX + 'sfuck', 'Adds fuck gif to the fuck command', true)
              .addField( PREFIX + 'scunni', 'Adds cunni gif to the cunni command', true)
              .addField( PREFIX + 'sundress', 'Adds undress gif to the undress command', true)
              .addField( PREFIX + 'smasturbate', 'Adds masturbate gif to the masturbate command', true)
              .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
              msg.channel.send(adminNsfw);   

            }
          }
          else {

            //NSFW Commands 8
            const nsfw = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands NSFW')
            .setDescription('The list of NSFW commands')
            .setThumbnail('https://cdn.discordapp.com/emojis/659923986523750412.png?v=1')
            .addField( PREFIX + 'cum', 'Cums into the battle!', true)
            .addField( PREFIX + 'suck', 'Suck someone`s dick', true)
            .addField( PREFIX + 'nsfw', 'Take an image from danbooru', true)
            .addField( PREFIX + 'fuck', 'Fucks someone', true)
            .addField( PREFIX + 'cunni', 'Make love to someone`s pussy', true)
            .addField( PREFIX + 'undress', 'Take off your clothes', true)
            .addField( PREFIX + 'urbansfw', 'Takes an urban dictionary definition (not filtered)', true)
            .addField( PREFIX + 'masturbate', 'Masturbate command!', true)
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
            msg.channel.send(nsfw);   

          }
        }); 
      db.close();
    });
  },
};
