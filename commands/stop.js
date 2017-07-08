exports.exec = (msg, args, sandboxed) => {
  const bot_voicechannel = msg.guild.voiceConnection.channel;
  const user_voicechannel = msg.member.voiceChannel;
  if(!bot_voicechannel) return msg.channel.send(":x: Im not connected to any Voicechannel!");
  if(!user_voicechannel) return msg.channel.send(":x: You are not connected to any Voicechannel!");
  if(bot_voicechannel !== user_voicechannel) return msg.channel.send(":x: You are not connected to my Voicechannel.")

  msg.channel.send("Okay! Im gonna stop playing in your Voicechannel!");
  msg.guild.voiceConnection.disconnect();
}

exports.cmd = {
  usage: null,
  disabled: false
}
