const Discord = require("discord.js");

exports.exec = (msg, args, sandboxed) =>
{
  const snekfetch = require("snekfetch");
  if (msg.author.id !== "220591718158827520") {console.log(msg.author.id + " (" + msg.author.displayName +") was trying to perform eval in " + msg.guild + "!");msg.reply(":x: You are not allowed to use this Command!"); return false;}
  try {
    var Code = eval(args.join(" "));
    if (typeof Code !== "string")
       Code = require("util").inspect(Code, {
         depth: 0
       });
    tok = sandboxed.token;
    Code = Code.replace(new RegExp(sandboxed.user.email, "gi"), "git gud").replace(new RegExp(sandboxed.token, "gi"), "git gud");
    var embed = new Discord.RichEmbed();
    if (!Code.includes(tok.toString())) {
      embed.setColor("#33CCCC");
      embed.setTitle("sandboxed - eval");
      embed.setDescription("```js\n" + Code + "```");
      embed.setFooter("sandboxed | coded with ❤ by @jbs#3049", sandboxed.users.get("220591718158827520").avatarURL);
      msg.channel.send({embed});
    } else {
      msg.delete();
      return msg.channel.sendMessage("Nice try, bitch.");
    }
      console.log("Evaled " + args.join(" ") + "! Asked by " + msg.author.username + "! Code/Usage: " + Code);
    } catch (e) {
      var Eembed = new Discord.RichEmbed();
      Eembed.setTitle("sandboxed - eval - ERROR");
      Eembed.setColor("#B9341B");
      Eembed.setDescription("```js\n" + e + "```");
      Eembed.setFooter("sandboxed | coded with ❤ by @jbs#3049", sandboxed.users.get("220591718158827520").avatarURL);
      msg.channel.send({embed: Eembed});
      console.log("Evaled " + args.join(" ") + "! Asked by " + msg.author.username + "! Code/Usage: " + Code);
    }
};

exports.cmd = {
  usage: "<stuff to eval>",
  disabled: false
}
