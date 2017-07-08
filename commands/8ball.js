exports.exec = (msg, args, sandboxed) => {
  let answers = ["It is certain","It is decidedly so","Without a doubt","Yes. definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Signs point to yes","Yes","Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful","Are you kidding me","No","Eat a Sandwich"];
  let randomanswer = answers[Math.floor(Math.random() * answers.length)];

  msg.channel.send({embed: {
    color: sandboxed.color,
    title: "8Ball",
    description: `:question: ${args.join(" ")}\n :8ball: ${randomanswer}`
  }})
}

exports.cmd = {
  usage: "<your question>",
  disabled: false
}
