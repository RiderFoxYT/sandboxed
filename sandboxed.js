const Discord = require("discord.js");
const client = require("./client.js");
const sandboxed = new client();
const utils = require("./utils.js");
const fs = require("fs");

sandboxed.on("ready", () => {
  utils.log("Ready!");
});

sandboxed.on("message", msg => {
  var prefix = "this.";
  if (!msg.content.startsWith(prefix)) return false;
  if(msg.author.bot) return false;

  let args = msg.content.split(" ").slice(1);
  let command = msg.content.substring(prefix.length).toLowerCase().split(" ")[0];
  if (fs.existsSync(`./commands/${command}.js`)){
    if(!require(`./commands/${command}.js`).cmd.disabled == true)
    {
      try{
        delete require.cache[require.resolve(`./commands/${command}.js`)];
        require(`./commands/${command}.js`).exec(msg, args, sandboxed);
      }catch(e)
      {
        msg.channel.send("u wat? Got some error here: ```js\n" + e + "```")
      }
    }else{
      return false;
    }
  }
});
sandboxed.on("error", err => {return console.log(err)})

sandboxed.login(sandboxed.config.token);

exports.sandboxed = sandboxed
