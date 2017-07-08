const Discord = require("discord.js");
const snekfetch = require("snekfetch");

exports.exec = (msg, args, sandboxed) => {
  snekfetch.get("https://random.birb.pw/tweet.json").then( r => {
    var url = JSON.parse(r.text);
      msg.channel.send({embed: {
          color: sandboxed.color,
          title: 'tweet!',
          image: { url: `https://random.birb.pw/img/${url.file}` },
          footer: { text: "using random.birb.pw API!" }
      } });
  })
}

exports.cmd = {
  usage: null,
  disabled: false
}
