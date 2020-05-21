const MongoClient = require('mongodb').MongoClient;
const Discord = require('discord.js');
const config = require('../config.js');
var rp = require("request-promise");
var htmlToText = require("html-to-text");
const MONGO = config.MONGO;
const DB = config.DB;
const DEV = config.DEV;
module.exports = {
    name: 'fchan',
    description: 'Cringe 4chan command, enjoy',
    execute(msg, args){
    	var suffix=args.join(" ");
        // variable to hold matches
		var matches = [];
		// get board to search
		var board = suffix.split(' ')[0];
		// get search string
		var searchString = suffix.slice(board.length + 1);
		var searchRegex = new RegExp(searchString, 'i');
		// pull the catalog of the board in question
		var restString = 'https://a.4cdn.org/' + board + '/catalog.json';
		var catalog;
		rp(restString)
		.then(function(response) {
			catalog = JSON.parse(response);
			// concatenate threads into one array
			var threads = [];
			for(var i = 0; i < catalog.length; ++i) {
				threads = threads.concat(catalog[i]['threads']);
			}
			// search thread subjects first
			for(var i = 0; i < threads.length; ++i) {
				if((threads[i]['sub'] != null) && (threads[i]['sub'].match(searchRegex))) {
					matches.push(threads[i]);
				}
			}
			// did any of the subjects match the search string?
			if(matches.length > 0) {
				var filepath = 'https://i.4cdn.org/' + board + '/' + matches[0]['tim'] + matches[0]['ext'];
				var name = matches[0]['name'];
				var subject = matches[0]['sub'];
				var comment = (matches[0]['com'] === null) ? '' : matches[0]['com'];
				var link = 'https://boards.4chan.org/' + board + '/thread/' + matches[0]['no'];
				var finalMessage = 'Image: ' + filepath + '\nName: ' + name + '\nSubject: ' + subject + '\nComment:\n' + htmlToText.fromString(comment) + '\nLink: ' + link;
				msg.channel.send(finalMessage);
			} else {
				// search thread bodies now
				for(var i = 0; i < threads.length; ++i) {
					if((threads[i]['com'] != null) && (threads[i]['com'].match(searchRegex))) {
						matches.push(threads[i]);
					}
				}
				// did any of the comments match the search string?
				if (matches.length > 0) {
					var filepath = 'https://i.4cdn.org/' + board + '/' + matches[0]['tim'] + matches[0]['ext'];
					var name = matches[0]['name'];
					var subject = (matches[0]['sub'] === null) ? '' : matches[0]['sub'];
					var comment = matches[0]['com'];
					var link = 'https://boards.4chan.org/' + board + '/thread/' + matches[0]['no'];
					var finalMessage = 'Image: ' + filepath + '\nName: ' + name + '\nSubject: ' + subject + '\nComment:\n' + htmlToText.fromString(comment) + '\nLink: ' + link;
					msg.channel.send(finalMessage);
				} else {
					msg.channel.send('4chan: No matches found.');
				}
			}
		})
		.catch(function(error) {
			msg.channel.send("4CHAN ERROR: " + error);
		});
    },
};