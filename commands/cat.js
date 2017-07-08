const Discord = require("discord.js");
const snekfetch = require("snekfetch");

exports.exec = async (msg, args, sandboxed) => {
  const r = await snekfetch.get("http://random.cat/meow");
    msg.channel.send({embed: {
        color: sandboxed.color,
        title: 'Meow!',
        image: { url: r.body.file },
        footer: { text: "using random.cat API!" }
    } });
}

exports.cmd = {
  usage: null,
  disabled: false
}
