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
				param0: 'kicks',
			}
		}
		else if(commandName=='blush'){
			commandName={
				name: 'blush',
				description: 'blush!',
				type: 'query',
				rate: 'safe',
				col: 'blush',
				param0: 'blushes',
			}
		}
		else if(commandName=='que'){
			commandName={
				name: 'que',
				description: 'que!',
				type: 'query',
				rate: 'safe',
				col: 'que',
				param0: ',¿Qué?',
			}
		}
		else if(commandName=='pat'){
			commandName={
				name: 'pat',
				description: 'pat!',
				type: 'multiquery',
				rate: 'safe',
				col: 'pat',
				param0: 'pats',
			}
		}
		else if(commandName=='cry'){
			commandName={
				name: 'cry',
				description: 'cry!',
				type: 'query',
				rate: 'safe',
				col: 'cry',
				param0: ', Why so sad?',
			}
		}
		else if(commandName=='hug'){
			commandName={
				name: 'hug',
				description: 'hug!',
				type: 'multiquery',
				rate: 'safe',
				col: 'hug',
				param0: 'hugs',
			}
		}
		else if(commandName=='nice'){
			commandName={
				name: 'nice',
				description: 'nice!',
				type: 'query',
				rate: 'safe',
				col: 'nice',
				param0: ', Niiiiiice!',
			}
		}
		else if(commandName=='tea'){
			commandName={
				name: 'tea',
				description: 'tea!',
				type: 'query',
				rate: 'safe',
				col: 'tea',
				param0: `,It's tea time!`,
			}
		}
		else if(commandName=='dab'){
			commandName={
				name: 'dab',
				description: 'dab!',
				type: 'query',
				rate: 'safe',
				col: 'dab',
				param0: 'dabs to them haters!',
			}
		}
		else if(commandName=='slap'){
			commandName={
				name: 'slap',
				description: 'slap someone!',
				type: 'multiquery',
				rate: 'safe',
				col: 'slap',
				param0: 'slaps',
			}
		}
		else if(commandName=='kiss'){
			commandName={
				name: 'kiss',
				description: 'kiss someone!',
				type: 'multiquery',
				rate: 'safe',
				col: 'kiss',
				param0: 'kisses',
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
				param0: 'laughs',
			}
		}
		else if(commandName=='feet'){
			commandName={
				name: 'feet',
				description: 'feet!',
				type: 'query',
				rate: 'safe',
				col: 'feet',
				param0: ', notice this feet!',
			}
		}
		else if(commandName=='bite'){
			commandName={
				name: 'bite',
				description: 'bite!',
				type: 'multiquery',
				rate: 'safe',
				col: 'bite',
				param0: 'bites',
			}
		}
		else if(commandName=='pout'){
			commandName={
				name: 'pout',
				description: 'pout!',
				type: 'query',
				rate: 'safe',
				col: 'pout',
				param0: 'pouts',
			}
		}
		else if(commandName=='angry'){
			commandName={
				name: 'angry',
				description: 'angry!',
				type: 'query',
				rate: 'safe',
				col: 'angry',
				param0: 'is angry!',
			}
		}
		else if(commandName=='dance'){
			commandName={
				name: 'dance',
				description: 'dance!',
				type: 'query',
				rate: 'safe',
				col: 'dance',
				param0: 'dances',
			}
		}
		else if(commandName=='punch'){
			commandName={
				name: 'punch',
				description: 'punch someone!',
				type: 'multiquery',
				rate: 'safe',
				col: 'punch',
				param0: 'punches',
			}
		}
		else if(commandName=='handhold'){
			commandName={
				name: 'handhold',
				description: 'handhold someone!',
				type: 'multiquery',
				rate: 'safe',
				col: 'handhold',
				param0: 'holds your hand,',
			}
		}
		else if(commandName=='cursed'){
			commandName={
				name: 'cursed',
				description: 'cursed images!',
				type: 'query',
				rate: 'safe',
				col: 'cursed',
				param0: ', this is cursed!',
			}
		}
		else if(commandName=='panic'){
			commandName={
				name: 'panic',
				description: 'panic!',
				type: 'query',
				rate: 'safe',
				col: 'panic',
				param0: 'is on panic!',
			}
		}
		else if(commandName=='panic'){
			commandName={
				name: 'panic',
				description: 'panic!',
				type: 'query',
				rate: 'safe',
				col: 'panic',
				param0: 'is on panic!',
			}
		}
		else if(commandName=='beg'){
			commandName={
				name: 'beg',
				description: 'beg!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'beg',
				param0: 'is begging for more,',
			}
		}
		else if(commandName=='cum'){
			commandName={
				name: 'cum',
				description: 'cum!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'cum',
				param0: 'cums on',
			}
		}
		else if(commandName=='cunni'){
			commandName={
				name: 'cunni',
				description: 'cunni!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'cunni',
				param0: 'makes sweet love to',
			}
		}
		else if(commandName=='fuck'){
			commandName={
				name: 'fuck',
				description: 'fuck!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'fuck',
				param0: 'fucks',
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
				param0: 'sucks your pp,',
			}
		}
		else if(commandName=='spank'){
			commandName={
				name: 'spank',
				description: 'spank!',
				type: 'multiquery',
				rate: 'lewd',
				col: 'spank',
				param0: 'spanks',
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
				param0: 'is now undress',
			}
		}
		else if(commandName=='masturbate'){
			commandName={
				name: 'masturbate',
				description: 'masturbate!',
				type: 'query',
				rate: 'lewd',
				col: 'masturbate',
				param0: 'masturbates',
			}
			if(typeof argument != undefined){
				if(argument=='-m'){
					commandName.col='multibate';
					commandName.type='multiquery';
				}
			}
		}
		else{
			//nothing
		}
		return commandName;
	},
};