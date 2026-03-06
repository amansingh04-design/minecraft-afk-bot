const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(3000, () => {
  console.log("Web server running");
});


const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'vaarsmp.falixsrv.me',
  port: 25565,
  username: 'AFK_Bot'
})

bot.on('spawn', () => {
  console.log("Bot joined!")

  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }, 15000)
})
