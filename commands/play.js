const ytdl = require('ytdl-core');
const discord = require("discord.js");
const youtube_api = require("simple-youtube-api");

const cfg = require("../sandboxed.js").sandboxed.config;

const YouTube = new youtube_api(cfg.yttoken)

exports.exec = (msg, args, sandboxed) =>
{
  let channel = msg.member.voiceChannel;
  const client = sandboxed.client;
  if(!channel) return msg.reply(":x: You are not in a voice-channel!");
  channel.join()
      .then(connection => {
        YouTube.searchVideos(args.join(" "), 1).then(results => {
          var url = "https://youtube.com/watch?v=" + results[0].id
                const streamOptions = { seek: 0, volume: 1 };
                const stream = ytdl(url, { filter : 'audioonly', quality: 'highest'});
                const dispatcher = connection.playStream(stream, streamOptions);

                ytdl.getInfo(url, function(err, info) {
                  msg.channel.send({embed: new discord.RichEmbed()
                    .setTitle(":musical_note: Now Playing:").setThumbnail(`${info.iurlmaxres}`).setDescription(`**${info.title}**\n\n**Uploaded by** [${info.author.name}](${info.author.channel_url})\n\n**Description** ${(info.description).substring(0, 400)}`)})
                })

        })
      }).catch(console.error);

}

exports.cmd = {
  usage: "<yturl>",
  disabled: false
}
