const Discord = require("discord.js");
const client = require("./client.js");
const sandboxed = new client();
const utils = require("./utils.js");
const fs = require("fs");
var guilds_collection = new Discord.Collection();

sandboxed.on("ready", () => {
  utils.log("Ready!");
  sandboxed.user.setGame(">>help | " + sandboxed.guilds.size + "servers <3")

  sandboxed.color = 0x33cccc;
  sandboxed.utils = require("./utils.js");
  sandboxed.embedFooter = "sandboxed | coded with ❤ by @jbs#3049";
  sandboxed.version = "2.0.1"
  sandboxed.codename = "smoothie"
  sandboxed.config = require("../config.json")
  sandboxed.guilds = guilds_collection;
  sandboxed.ownerid = "220591718158827520";
  sandboxed.guilds.forEach(x => {
    var id = x.id
    guilds_collection.set("" + id, {name: x.name, owner: x.owner, channels: x.channels, users: x.members, member_count: x.members.size, channel_count: x.channels.size})
  })

});

sandboxed.on("message", msg => {
  var prefix = ">>";
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
