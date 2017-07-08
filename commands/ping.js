exports.exec = (msg, args, sandboxed) =>
{
   msg.channel.send(`:ping_pong: ${Math.round(sandboxed.ping)}ms!`)
}

exports.cmd = {
  usage:null,
  disabled:false
};
