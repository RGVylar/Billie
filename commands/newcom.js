const Discord = require('discord.js');
const config = require("../config.js");
const fs = require('fs') 
const DEV = config.DEV;
const TOKEN = config.TOKEN;
module.exports = {
  name: 'newcom',
  description: 'Creates new command',
  execute(msg, args, options, bot,PREFIX) {
    var id;
    if(msg.channel.type=='dm'){
      id = msg.author.id;
    }
    else{
      id = msg.member.user.id;
    }
    if(id==DEV){
      var command=args[0];
      args.splice(0,1);
      var data=args.join(' ');
      var connection= `  `+(command.charAt(0).toUpperCase() + command.slice(1))+`: require('./`+command+`'),\n};`;

      fs.appendFile('commands/'+command+'.js', data, function (err) {
          if (err) throw err;
          msg.channel.send('command `'+command+'` created');
        });
      fs.readFile('commands/index.js', 'utf8', function(err, data){
        let splitArray = data.split('\n');
        splitArray.splice(splitArray.indexOf(data), 1);
        let result = splitArray.join('\n')+'\n'+connection;
        fs.writeFile('commands/index.js', result, function (err) {
          if (err) throw err;
          msg.channel.send('command `'+command+'` added to the index, please, restart me');
        });
      })
    }else{msg.channel.send("You dont have permission");}
  },
};