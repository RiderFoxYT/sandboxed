const Discord = require("discord.js");
const config = require("../config.json");

const client = new Discord.Client();

let User = client.user;

client.login(config.token);

client.on("ready", () =>{
    console.log("sandboxed sucessfully started!");
    client.user.setGame(">>help | " + client.guilds.size + " Guilds.");
})

client.on("message", msg =>{
    let prefix = ">>";

    if(msg.content.includes(client.token))
    {
      msg.delete();
      msg.channel.sendMessage("Nice try, bitch.")
    }
    if (msg.channel.type === 'dm') console.log(msg.author.username + " sended a dm: " + msg.content);
    var CommandArguments = msg.content.split(" ").slice(1);
    var command = msg.content.substring(prefix.length).toLowerCase().split(" ")[0];
    if(!msg.content.startsWith(prefix)) return false;
    if(command === "eval")
    {
      var permitted = [
        "220591718158827520"
      ]
      if(!permitted.includes(msg.author.id))
      {
          console.log(msg.author + " was trying to perform eval in " + msg.guild + "!");
      }else{
          try{
                   var Code = eval(CommandArguments.join(" "));
                   if (typeof Code !== 'string')
                   Code = require('util').inspect(Code, {depth:0});
                   let tok = client.token
                   Code = Code.replace(new RegExp(client.user.email, "gi"), "git gud").replace(new RegExp(client.token, "gi"), "git gud")
                   var embed = new Discord.RichEmbed();
                   if(!Code.includes(tok.toString()))
                   {
                   embed.setColor("#33CCCC");
                   embed.setTitle("sandboxed - eval");
                   embed.setDescription("```js\n" + Code + "```");
                   embed.setFooter("sandboxed - developed by lordjbs#3049");
                   msg.channel.sendEmbed(embed);
                 }else{
                   msg.delete();
                   msg.channel.sendMessage("Nice try, bitch.");
                 }
                   //msg.channel.sendMessage("```js\n" + Code + "```");
                   console.log("Evaled " + CommandArguments.join(" ") + "! Asked by " + msg.author.username + "! Code/Usage: " + Code);

          }catch(e)
          {
            var embed = new Discord.RichEmbed();
            embed.setTitle("sandboxed - eval - ERROR");
            embed.setColor("#B9341B");
            embed.setDescription("```js\n" + e + "```");
            embed.setFooter("sandboxed - developed by lordjbs#3049");
            msg.channel.sendEmbed(embed);
          }
      }
    }else if(command === "reboot"){
      if(msg.author.id !== "220591718158827520"){

      }else{
      msg.channel.sendMessage("Rebooting Core...");
      console.log("Rebooting core...")
      setTimeout(reboot, 3000)
      console.log("rebooted!")
    }
}else{
    var Manager = require("./commands/CommandWrapper.js")
    Manager.performed(msg, command, CommandArguments, Discord, client);
  }

})

function reboot()
{
  return process.exit(0);
}

function wat(msg)
{
  return msg.channel.sendMessage("https://media.giphy.com/media/1L5YuA6wpKkNO/giphy.gif");
}

client.on("guildCreate", () =>{
  client.user.setGame(">>help | " + client.guilds.array().length + " Guilds.");
})

process.on("unhandledRejection", err => {
  console.error(`Uncaught Promise Error: \n${err.stack}`);
});
