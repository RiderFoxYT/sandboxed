exports.log = (message) => {
  console.log(message);
}

/*eslint linebreak-style: ["error", "windows"]*/
var unit = ["", "K", "M", "G", "T", "P"];

exports.bytesToSize = function (input, precision)
{
  var index = Math.floor(Math.log(input) / Math.log(1024));
  if (unit >= unit.length) return input + " B";
  return (input / Math.pow(1024, index)).toFixed(precision) + " " + unit[index] + "B";
};

exports.getUptime = function() {
  var d = Math.floor(process.uptime() / 86400);
  var hrs = Math.floor((process.uptime() % 86400) / 3600);
  var min = Math.floor(((process.uptime() % 86400) % 3600) / 60);
  var sec = Math.floor(((process.uptime() % 86400) % 3600) % 60);

  if (d === 0 && hrs !== 0) {
    return `${hrs} Hours and ${min} Minutes`;
  } else if (d === 0 && hrs === 0 && min !== 0) {
    return `${min} Minutes and ${sec} Seconds`;
  } else if (d === 0 && hrs === 0 && min === 0) {
    return `${sec} Seconds!`;
  } else {
    return `${d} Days, ${hrs} Hours and ${min} Minutes`;
  }
};
