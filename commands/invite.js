const Discord = require("discord.js");

exports.exec = (msg, args, sandboxed) => {
  var embed = new Discord.RichEmbed();
  embed.setColor("#33CCCC");
  embed.addField("Invite", "[Click Here!](https://discordapp.com/oauth2/authorize?client_id=279725066789322752&scope=bot&permissions=8198)", true);
  embed.addField("Join Help Server!", "[Click Here!](https://discord.gg/ypqHAd9)", true);
  embed.setFooter("sandboxed | coded with ❤ by @jbs#3049", sandboxed.users.get("220591718158827520").avatarURL)

  msg.channel.send(embed);
}
