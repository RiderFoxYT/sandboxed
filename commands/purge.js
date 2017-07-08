exports.exec = (msg, args, sandboxed) => {
  if(msg.member.roles.find("name", "sandboxed") || msg.author.id === msg.guild.owner.id)
  {
    const user = msg.mentions.users.first();
    const amount = parseInt(args[0])
    if (!amount) return msg.reply('You need to specify an amount to delete!');
    msg.channel.fetchMessages({
      limit: amount,
    }).then((messages) => {
      msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });
  }else{
    msg.reply("You dont have permissions! You need the `sandboxed` role for using this command.")
  }
}

exports.cmd = {
  usage: "<Integer:Messages to delete>",
  disabled: false
}
