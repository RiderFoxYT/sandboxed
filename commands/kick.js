const Discord = require("discord.js")

exports.exec = (msg, args, sandboxed) => {
  let user = msg.mentions.users.first();
  let guild = msg.guild;
  let modlog = msg.guild.channels.find("name", "mod-log");
  args.shift();
  let reason = args.join(" ");

  if(msg.member.roles.find("name", "sandboxed") || msg.author.id === msg.guild.owner.id)
  {
    if(reason.length < 1) reason = "No Reason.";
    if(msg.mentions.users.size < 1) return msg.reply("You need to mention the user you wanna kick!");
    if(!msg.guild.member(user).kickable) return msg.reply("Sorry, but i cannot kick this user!");

    user.sendMessage("You have been kicked from " + guild.name + "! Reason: " + reason);
    msg.guild.member(user).kick().catch( (e) =>{
      msg.channel.sendMessage("Sorry, but i dont have permissions to kick this user!");
      console.log(e);
    });
    msg.channel.sendMessage(":ok_hand:");
    if(!modlog)
    {
      //eslint -.-
    }else{
      const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField("Action:", "Kick")
      .addField("User:", `${user.username}#${user.discriminator} (${user.id})`)
      .addField("Moderator:", `${msg.author.username}#${msg.author.discriminator}`)
      .addField("Reason", reason);
      return sandboxed.channels.get(modlog.id).sendEmbed(embed);
    }
  }else{
    msg.reply("Sorry, but you dont have permissions! You need the 'sandboxed' role to use moderation commands!");
  }
}

exports.cmd = {
  usage: "<@user> <reason>",
  disabled: false
}
