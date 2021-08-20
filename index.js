const Aoi = require('aoi.js');
const bot = new Aoi.Bot({
  token: process.env['token'],
  prefix: "$getServerVar[prefix]",
  mobile: false,
  fetchInvites: true
})
bot.onMessage()

bot.loadCommands("./komutlar")
 
/////komutlar asagiya veya komutlar klasorune///
