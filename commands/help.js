const Discord = require('discord.js');
const config = require("../config.js");
const MongoClient = require('mongodb').MongoClient;
const DEV = config.DEV;
const DB = config.DB;
module.exports = {
  name: 'help',
  description: 'list of commands',
  execute(msg, args) {
      const MONGO = config.MONGO;
      MongoClient.connect(MONGO, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection("config").find({}).toArray(function(err, result) {
          if (err) throw err;
          var res = result[0].prefix;
          var PREFIX  = res[0];
          //Commands 85
          //SAFE commands 25
          const commands = new Discord.RichEmbed()
          .setColor('#99cc00')
          .setTitle('Commands 1')
          .setDescription('The list of commands')
          .setThumbnail('https://cdn.discordapp.com/avatars/683278717933453383/94953211657edbf9f841679da36ca535.png?size=2048')
          .addField( PREFIX + 'sa', 'Super sacred command')
          .addField( PREFIX + 'cry', 'Cry like a baby')
          .addField( PREFIX + 'dab', 'Dab to the haters')
          .addField( PREFIX + 'say', 'Say something')
          .addField( PREFIX + 'hug', 'Hug someone')
          .addField( PREFIX + 'rps', 'Play rock, paper scissors')
          .addField( PREFIX + 'tea', 'Drink some tea')
          .addField( PREFIX + 'coin', 'Flips a coin')
          .addField( PREFIX + 'help', 'Show this list...')
          .addField( PREFIX + 'ping', 'Checks your ping')
          .addField( PREFIX + 'turn', 'This one is secret')
          .addField( PREFIX + 'dice', 'Gives a number from 0 to ?')
          .addField( PREFIX + 'date', 'Gives the date')
          .addField( PREFIX + 'kick', 'Kick someone')
          .addField( PREFIX + 'kiss', 'Kiss someone (-l makes it better)')
          .addField( PREFIX + 'loli', 'Are you sure about this one?')
          .addField( PREFIX + 'dance', 'Dance, dance til you atadaaare dead')
          .addField( PREFIX + 'punch', 'Punch someone')
          .addField( PREFIX + 'urban', 'Show a SFW definition')
          .addField( PREFIX + 'order', 'Show monogatari watch order')
          .addField( PREFIX + 'lolito', 'OMG LOLITO')
          .addField( PREFIX + 'cursed', 'Show cursed images')
          .addField( PREFIX + 'attach', 'This is an example')
          .addField( PREFIX + 'avatar', 'Show the avatars')
          .addField( PREFIX + 'translate', 'Translates something')
          .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
          msg.channel.send(commands);

          //SAFE Commands 11
          const commands2 = new Discord.RichEmbed()
          .setColor('#99cc00')
          .setTitle('Commands 2')
          .setDescription('The list of ignore commands')
          .setThumbnail('https://cdn.discordapp.com/avatars/683278717933453383/94953211657edbf9f841679da36ca535.png?size=2048')
          .addField( PREFIX + 'ignoreme', 'ill ignore you')
          .addField( PREFIX + 'noticeme', 'ill notice you')
          .addField( PREFIX + 'github', 'Ill spam my repo')
          .addField( PREFIX + 'pat', 'pat someone')
          .addField( PREFIX + 'slap', 'slap someone')
          .addField( PREFIX + 'handhold', 'W-wait isnt this lewd??')
          .addField( PREFIX + 'spank', 'Spank me baby')
          .addField( PREFIX + 'laugh', 'You ill laugh about this...')
          .addField( PREFIX + 'panic', 'Are you on danger? This is your command!')
          .addField( PREFIX + 'blush', 'o///o n-nani?')
          .addField( PREFIX + 'random', 'ill send you a random youtube video')
          .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
          msg.channel.send(commands2);

          //if(msg.member.roles.find(r => r.name === "tester")){
            if(msg.guild.owner||msg.member.id==DEV){

            //ADMIN Commands 15
            const admin = new Discord.RichEmbed()
            .setColor('#99cc00')
            .setTitle('Admin Commands')
            .setDescription('The list of the Admin commands')
            .setThumbnail('https://cdn.discordapp.com/avatars/273081779420921856/d2d64a2647fbd912097802433d0359d3.png?size=2048')
            .addField( PREFIX + 'scry', 'Adds cry gif to the cry command')
            .addField( PREFIX + 'sdab', 'Adds dab gif to the dab command')
            .addField( PREFIX + 'shug', 'Adds hug gif to the hug command')
            .addField( PREFIX + 'stea', 'Adds tea gif to the tea command')
            .addField( PREFIX + 'sspank', 'Adds dab spank to the spank command')
            .addField( PREFIX + 'slaugh', 'Adds dab laugh to the laugh command')
            .addField( PREFIX + 'punch', 'Adds punch gif to the punch command')
            .addField( PREFIX + 'purge', 'Removes n messages')
            .addField( PREFIX + 'skiss', 'Adds kiss gif to the kiss command')
            .addField( PREFIX + 'skick', 'Adds kick gif to the kick command')
            .addField( PREFIX + 'sdance', 'Adds dance gif to the dance command')
            .addField( PREFIX + 'prefix', 'Changes the prefix')
            .addField( PREFIX + 'scursed', 'Adds cursed gif to the cursed command')
            .addField( PREFIX + 'sblush', 'Adds blush gif to the blush command')
            .addField( PREFIX + 'newcommand', 'Adds a new command')
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
            msg.channel.send(admin);

          }

          //Music Commands 3
          const music = new Discord.RichEmbed()
          .setColor('#0099ff')
          .setTitle('Music Commands')
          .setDescription('The list of Music commands')
          .setThumbnail('https://cdn.discordapp.com/emojis/518934188800344084.gif?v=1')
          .addField( PREFIX + 'join', 'Bot joins to your channel')
          .addField( PREFIX + 'stop', 'Bot leaves your channel')
          .addField( PREFIX + 'play', 'Bot plays or adds song to the queue')
          .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
          msg.channel.send(music);

          if (!msg.channel.nsfw) {  

            //NSFW Commands 0
            const nsfw = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands NSFW')
            .setDescription('The list of NSFW commands')
            .setThumbnail('https://cdn.discordapp.com/emojis/594181619137380365.gif?v=1')
            .addField( 'NSFW Commands in this channel', 'Please, ask for the commands on a NSFW channel if you want to see them')
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
            msg.channel.send(nsfw);
          }
          else {

            //NSFW Commands 9
            const nsfw = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('Commands NSFW')
            .setDescription('The list of NSFW commands')
            .setThumbnail('https://cdn.discordapp.com/emojis/659923986523750412.png?v=1')
            .addField( PREFIX + 'cum', 'Cums into the battle!')
            .addField( PREFIX + 'suck', 'Suck someone`s dick')
            .addField( PREFIX + 'nsfw', 'Take an image from danbooru')
            .addField( PREFIX + 'fuck', 'Fucks someone')
            .addField( PREFIX + 'cunni', 'Make love to someone`s pussy')
            .addField( PREFIX + 'sauce', 'Gives the nhentai url!')
            .addField( PREFIX + 'undress', 'Take off your clothes')
            .addField( PREFIX + 'urbansfw', 'Takes an urban dictionary definition (not filtered)')
            .addField( PREFIX + 'masturbate', 'Masturbate command!')
            .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
            msg.channel.send(nsfw);   

            //if(msg.member.roles.find(r => r.name === "tester")){
            if(msg.guild.owner||msg.member.id==DEV){

              //ADMIN NSFW Commands 7
              const adminNsfw = new Discord.RichEmbed()
              .setColor('#FF0000')
              .setTitle('Admin nsfw Commands')
              .setDescription('The list of NSFW Admin commands')
              .setThumbnail('https://cdn.discordapp.com/avatars/95589920415948800/7430d162faaa4bf9298230c0c1e3428c.png?size=2048')
              .addField( PREFIX + 'scum', 'Adds cum gif to the cry command')
              .addField( PREFIX + 'ssuck', 'Adds suck gif to the suck command')
              .addField( PREFIX + 'sfuck', 'Adds fuck gif to the fuck command')
              .addField( PREFIX + 'scunni', 'Adds cunni gif to the cunni command')
              .addField( PREFIX + 'sundress', 'Adds undress gif to the undress command')
              .addField( PREFIX + 'smasturbate', 'Adds masturbate gif to the masturbate command')
              .setFooter('The prefix right now is `'+PREFIX+'`', 'https://cdn.discordapp.com/emojis/675047947246764042.png?v=1');
              msg.channel.send(adminNsfw);   

            }
          }
        }); 
      db.close();
    });
  },
};
