const Discord = require("discord.js");
const snekfetch = require("snekfetch");

exports.exec = async (msg, args, sandboxed) => {
  const r = await snekfetch.get("http://random.dog/woof");
    msg.channel.send({embed: {
        color: sandboxed.color,
        title: 'Woof!',
        image: { url: `https://random.dog/${r.text}` },
        footer: { text: "using random.dog API!" }
    } });
}

exports.cmd = {
  usage: null,
  disabled: false
}
