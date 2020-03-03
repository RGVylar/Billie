module.exports = {
  name: 'list',
  description: 'list!',
  execute(msg, args) {
    msg.channel.send('```fix\nCommand list =\nsv_avatar: sends avatar link\nsv_coin: flips a coin\nsv_dice: rolls a dice\nsv_join: joins channel\nsv_lolito: super secret command\nsv_ping: test command\nsv_play: this is not working yet\nsa: I miss this command\nsv_stop: get out of this channel\nsv_suck: n-nani?...\nsv_turn: Tekkus command\n```');
    msg.delete();
  },
};
