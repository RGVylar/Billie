module.exports = {
	name: 'lolito',
	description: 'sa!',
	execute: async (msg, args) =>{
		await msg.react('679961156554850316');
		await msg.react('679961519471067148');
		await msg.react('679961357570801716');
		await msg.react('679961357566738592');
		await msg.react('679961357566738592');
		msg.channel.send(
			'<:omglolito0:679961156554850316>'+
			'<:omglolito1:679961519471067148>'+
			'<:omglolito2:679961357570801716>'+
			'<:omglolito3:679961357566738592>');
	},
};