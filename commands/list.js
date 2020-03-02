module.exports = {
  name: 'sv_list',
  description: 'list!',
  execute(msg, args) {
    msg.channel.send('```fix\n
Command list =\n
sv_avatar: sends avatar link\n
sv_coin: flips a coin\n
sv_dice: rolls a dice\n
sv_join: joins channel\n
sv_loliyo: super secret command\n
sv_ping: test command\n
sv_play: this is not working yet\n
sv_sa: I miss this command\n
sv_stop: get out of this channel\n
sv_suck: n-nani?...\n
sv_turn: Tekkus command\n
```');
    msg.delete();
  },
};
