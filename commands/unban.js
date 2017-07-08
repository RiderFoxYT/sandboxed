const Discord = require("discord.js");

exports.exec = (msg, args, sandboxed) => {
  const user = args[0];
  const modlog = msg.guild.channels.find("name", "mod-log");

  args.shift();
  let reason = args.join(" ");

  if(msg.member.roles.find("name", "sandboxed") || msg.author.id === msg.guild.owner.id)
  {
    if(!user) return msg.reply("You haven't supplied a user! Try something like an ID!");
    msg.guild.unban(user).catch( (e) => {
      msg.channel.sendMessage("An error occurred! Do i have ban permissions? Or is the user just not banned?");
      console.log(e);
    });
    if(modlog)
    {
      msg.channel.sendMessage(":ok_hand:");
      if(reason === null || reason === undefined)
      {
        reason = "No Reason";
      }
      const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField("Action:", "Unban")
      .addField("User:", `${user.username}#${user.discriminator} (${user.id})`)
      .addField("Moderator:", `${msg.author.username}#${msg.author.discriminator}`)
      .addField("Reason", reason);
      return sandboxed.channels.get(modlog.id).sendEmbed(embed);
    }
  }else{
    msg.reply("Sorry, but you dont have permissions! You need the 'sandboxed' role to access moderation commands!");
  }
}

exports.cmd = {
  usage: "<id> <reason>",
  disabled: false
}
