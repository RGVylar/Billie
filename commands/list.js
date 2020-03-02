module.exports = {
  name: 'sv_help',
  description: 'help!',
  execute(msg, args) {
    msg.channel.send(```fix
Command list =
sv_avatar: sends avatar link
sv_coin: flips a coin
sv_dice: rolls a dice
sv_join: joins channel
sv_loliyo: super secret command
sv_ping: test command
sv_play: this is not working yet :(
sv_sa: I miss this command
sv_stop: get out of this channel
sv_suck: n-nani?...u///u
sv_turn: Tekku's command
```);
    msg.delete();
  },
};
