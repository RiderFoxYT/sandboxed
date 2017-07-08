const snek = require("snekfetch")
var qs = require("querystring");
exports.exec = (msg, args, sandboxed) => {
  var params = {"api_key": "dc6zaTOxFJmzC","rating": "r","format": "json","limit": 1};var query = qs.stringify(params);if (args !== null) {query += "&tag=" + args.join("+");}

  snek.get("http://api.giphy.com/v1/gifs/random" + "?" + query).then(r => {
    var response = JSON.parse(r.text);
    msg.channel.send({embed: {
      color: sandboxed.color,
      title: "Giphy Search",
      image: {url: `https://media.giphy.com/media/${response.data.id}/giphy.gif`},
      description: `[Image](https://media.giphy.com/media/${response.data.id}/giphy.gif)`,
      footer: {text:"using giphy.com's api!"}
      }})
  })
}

exports.cmd = {
  usage: "<tags>",
  disabled: false
}
