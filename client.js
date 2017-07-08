const Discord = require("discord.js")
var guilds_collection = new Discord.Collection();

class sandboxed extends Discord.Client {
  constructor(options) {
    super(options)

    this.color = 0x33cccc;
    this.utils = require("./utils.js");
    this.embedFooter = "sandboxed | coded with ❤ by @jbs#3049";
    this.version = "2.0.1"
    this.codename = "smoothie"
    this.config = require("../config.json")
    this.guilds = guilds_collection;
    this.ownerid = "220591718158827520";
    this.guilds.forEach(x => {
      var id = x.id
      guilds_collection.set("" + id, {name: x.name, owner: x.owner, channels: x.channels, users: x.members, member_count: x.members.size, channel_count: x.channels.size})
    })
  }
}

module.exports = sandboxed
