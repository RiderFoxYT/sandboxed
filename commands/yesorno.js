const Discord = require("discord.js");
const snek = require("snekfetch");

exports.exec = (msg, args, sandboxed) => {
  snek.get("https://yesno.wtf/api").then(r => {
    var answer = (JSON.parse(r.text)).answer
    var hex;
    if(answer === "no") {
      hex = 0xff0000
      answer = "No!"
    }else if(answer === "yes"){
      hex = 0x00cc00
      answer = "Yes!"
    }

    msg.channel.send({embed: {
        color: hex,
        title: answer,
        image: { url: `${(JSON.parse(r.text)).image}` },
        footer: { text: "using yesno.wtf API!" }
    } });
  })
}

exports.cmd = {
  usage: "[question?]",
  disabled: false
}
