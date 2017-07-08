const os = require("os");
const Discord = require("discord.js");

exports.exec = (msg, args, sandboxed) =>
{
  var ram = process.memoryUsage().rss / 1024 / 1024;
  var used = ram / os.totalmem() / 1024 / 1024 * 100
  var embed = new Discord.RichEmbed()
  embed.setTitle("sandboxed stats: ")
  embed.setDescription(`**〉Guilds** ${sandboxed.guilds.size} (Channels: ${sandboxed.channels.size} | Users: ${sandboxed.users.size})\n**〉Memory** ${ram.toFixed(2)}MB from ${(os.totalmem() / 1024 / 1024 / 1024).toFixed()}GB (${used.toFixed(2)}% used)\n**〉Uptime** ${sandboxed.utils.getUptime()}\n**〉Versions:** sandboxed-${sandboxed.version}; node.js: ${process.version}; discord.js: ${Discord.version} and :heart:`)
  embed.setColor(sandboxed.color);
  embed.setFooter(sandboxed.embedFooter, sandboxed.users.get(sandboxed.ownerid).avatarURL)
  msg.channel.send({embed});
}

exports.cmd = {
  usage: null,
  disabled: false
}
