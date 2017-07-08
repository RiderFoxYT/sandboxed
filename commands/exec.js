const Discord = require("discord.js");

exports.exec = (msg, args, sandboxed) =>
{
  if(msg.author.id !== "220591718158827520"){ return msg.reply(":x: no!"); console.log(msg.author.id + " (" + msg.author.displayName +") was trying to perform eval in " + msg.guild + "!");}
  require("child_process").exec(args.join(" "), (er, out, err) => {
    console.log("exec " + args.join(" ") + "! Asked by " + msg.author.username + "! Code/Usage: " + args.join(" "));
    if(err)
    {
      var Eembed = new Discord.RichEmbed();
      Eembed.setTitle("sandboxed - exec - ERROR");
      Eembed.setColor("#B9341B");
      Eembed.setDescription("```bash\n" + err + "```");
      Eembed.setFooter("sandboxed | coded with ❤ by @jbs#3049", sandboxed.client.users.get("220591718158827520").avatarURL);
      return msg.channel.sendEmbed({embed: Eembed});
    }

    let embed = new Discord.RichEmbed();
    embed.setColor("#33CCCC");
    embed.setTitle("sandboxed - exec");
    embed.setDescription("```bash\n" + out + "```");
    embed.setFooter("sandboxed | coded with ❤ by @jbs#3049", sandboxed.client.users.get("220591718158827520").avatarURL);
    msg.channel.send({embed});
    });
}

exports.cmd = {
  usage: "<stuff to execute>",
  disabled: false
}
