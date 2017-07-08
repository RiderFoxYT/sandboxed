# setup file for linux.

echo "installing packages!"

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt-get install -y ffmpeg

cd ~/
echo "installing npm stuff"
npm install --save discord.js ytdl-core simple-youtube-api
npm install -g pm2

echo "done"
