exports.exec = (msg, args, sandboxed) => {
  if(args[0] === ("usage").toLowerCase())
  {
    try{
      var usage = require(`./${args[1]}.js`).cmd.usage;
      if(usage === null)
      {
        usage = ""
      }
      var str = "`>>" + args[1] + " " + usage + "`";
      msg.channel.send(`**Usage for >>${args[1]}**\n${str}`)
    }catch(e)
    {
      msg.channel.send(":x: This Command does not exist.")
    }
  }else{
    msg.channel.send("**Hello!** I am a discord bot, created by jbs#3049! If you wanna see the usage of a command, type: `>>help usage <command>`! For a full command documentation please look at <https://lordjbs.gitbook.io/sandboxed>")
  }
}

exports.cmd = {
  usage: "<usage <command>>",
  disabled: false
}
