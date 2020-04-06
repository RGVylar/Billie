const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
const MONGO = config.MONGO;
const DB = config.DB;
module.exports = {
	commands: function (msg,commandName,argument) {
		var command={};
		if (commandName=='kick') {
			commandName={
				name: 'kick',
				description: 'kick!',
				type: 'multiquery',
				rate: 'safe',
				col: 'kick',
				quote: 'kicks',
			}
		}
		else if(commandName=='blush'){
			commandName={
				name: 'blush',
				description: 'blush!',
				type: 'query',
				rate: 'safe',
				col: 'blush',
				quote: 'blushes',
			}
		}
		else if(commandName=='que'){
			commandName={
				name: 'que',
				description: 'que!',
				type: 'query',
				rate: 'safe',
				col: 'que',
				quote: ',¿Qué?',
			}
		}
		else if(commandName=='pat'){
			commandName={
				name: 'pat',
				description: 'pat!',
				type: 'multiquery',
				rate: 'safe',
				col: 'pat',
				quote: 'pats',
			}
		}
		else if(commandName=='cry'){
			commandName={
				name: 'cry',
				description: 'cry!',
				type: 'query',
				rate: 'safe',
				col: 'cry',
				quote: ', Why so sad?',
			}
		}
		else if(commandName=='hug'){
			commandName={
				name: 'hug',
				description: 'hug!',
				type: 'multiquery',
				rate: 'safe',
				col: 'hug',
				quote: 'hugs',
			}
		}
		else if(commandName=='nice'){
			commandName={
				name: 'nice',
				description: 'nice!',
				type: 'query',
				rate: 'safe',
				col: 'nice',
				quote: ', Niiiiiice!',
			}
		}
		else if(commandName=='tea'){
			commandName={
				name: 'tea',
				description: 'tea!',
				type: 'query',
				rate: 'safe',
				col: 'tea',
				quote: `,It's tea time!`,
			}
		}
		else if(commandName=='dab'){
			commandName={
				name: 'dab',
				description: 'dab!',
				type: 'query',
				rate: 'safe',
				col: 'dab',
				quote: 'dabs to them haters!',
			}
		}
		else if(commandName=='slap'){
			commandName={
				name: 'slap',
				description: 'slap someone!',
				type: 'multiquery',
				rate: 'safe',
				col: 'slap',
				quote: 'slaps',
			}
		}
		else if(commandName=='kiss'){
			commandName={
				name: 'kiss',
				description: 'kiss someone!',
				type: 'multiquery',
				rate: 'safe',
				col: 'kiss',
				quote: 'kisses',
			}
			if(typeof argument != undefined){
				if(argument=='-l'){
					commandName.col='lewdss';
				}	
			}
		}
		else if(commandName=='laugh'){
			commandName={
				name: 'laugh',
				description: 'laugh!',
				type: 'query',
				rate: 'safe',
				col: 'laugh',
				quote: 'laughs',
			}
		}
		else if(commandName=='feet'){
			commandName={
				name: 'feet',
				description: 'feet!',
				type: 'query',
				rate: 'safe',
				col: 'feet',
				quote: ', notice this feet!',
			}
		}
		else if(commandName=='bite'){
			commandName={
				name: 'bite',
				description: 'bite!',
				type: 'multiquery',
				rate: 'safe',
				col: 'bite',
				quote: 'bites',
			}
		}
		else if(commandName=='pout'){
			commandName={
				name: 'pout',
				description: 'pout!',
				type: 'query',
				rate: 'safe',
				col: 'pout',
				quote: 'pouts',
			}
		}
		else if(commandName=='angry'){
			commandName={
				name: 'angry',
				description: 'angry!',
				type: 'query',
				rate: 'safe',
				col: 'angry',
				quote: 'is angry!',
			}
		}
		else if(commandName=='dance'){
			commandName={
				name: 'dance',
				description: 'dance!',
				type: 'query',
				rate: 'safe',
				col: 'dance',
				quote: 'dances',
			}
		}
		else if(commandName=='punch'){
			commandName={
				name: 'punch',
				description: 'punch someone!',
				type: 'multiquery',
				rate: 'safe',
				col: 'punch',
				quote: 'punches',
			}
		}
		else if(commandName=='handhold'){
			commandName={
				name: 'handhold',
				description: 'handhold someone!',
				type: 'multiquery',
				rate: 'safe',
				col: 'handhold',
				quote: 'holds your hand,',
			}
		}
		else if(commandName=='cursed'){
			commandName={
				name: 'cursed',
				description: 'cursed images!',
				type: 'query',
				rate: 'safe',
				col: 'cursed',
				quote: ', this is cursed!',
			}
		}
		else if(commandName=='panic'){
			commandName={
				name: 'panic',
				description: 'panic!',
				type: 'query',
				rate: 'safe',
				col: 'panic',
				quote: 'is on panic!',
			}
		}
		else if(commandName=='panic'){
			commandName={
				name: 'panic',
				description: 'panic!',
				type: 'query',
				rate: 'safe',
				col: 'panic',
				quote: 'is on panic!',
			}
		}
		else if(commandName=='beg'){
			commandName={
				name: 'beg',
				description: 'beg!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'beg',
				quote: 'is begging for more,',
			}
		}
		else if(commandName=='cum'){
			commandName={
				name: 'cum',
				description: 'cum!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'cum',
				quote: 'cums on',
			}
		}
		else if(commandName=='cunni'){
			commandName={
				name: 'cunni',
				description: 'cunni!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'cunni',
				quote: 'makes sweet love to',
			}
		}
		else if(commandName=='fuck'){
			commandName={
				name: 'fuck',
				description: 'fuck!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'fuck',
				quote: 'fucks',
			}
			if(typeof argument != undefined){
				if(argument=='-s'){
					commandName.col='strapon';
				}
				else if(argument=='-a'){
					commandName.col='anal';
				}	
				else if(argument=='-o'){
					commandName.col='oral';
				}	
			}
		}
		else if(commandName=='suck'){
			commandName={
				name: 'suck',
				description: 'suck!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'suck',
				quote: 'sucks your pp,',
			}
		}
		else if(commandName=='spank'){
			commandName={
				name: 'spank',
				description: 'spank!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'spank',
				quote: 'spanks',
			}
			if(typeof argument != undefined){
				if(argument=='-irl'){
					commandName.col='irlspank';
				}	
			}
		}
		else if(commandName=='undress'){
			commandName={
				name: 'undress',
				description: 'undress!',
				type: 'query',
				rate: 'lewd',
				col: 'undress',
				quote: 'is now undress',
			}
		}
		else if(commandName=='masturbate'){
			commandName={
				name: 'masturbate',
				description: 'masturbate!',
				type: 'query',
				rate: 'lewd',
				col: 'masturbate',
				quote: 'masturbates',
			}
			if(typeof argument != undefined){
				if(argument=='-m'){
					commandName.col='multibate';
					commandName.type='multiquery';
				}
			}
		}
		else{
			commandName={
				description: false,
			}
		}
		return commandName;
	},
};