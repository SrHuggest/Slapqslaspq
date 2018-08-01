const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.channel.send(`${message.author}, 🛰️ __Ping__: ${Math.round(bot.ping)}`)
}
  module.exports.help = {
    name:"ping"
  }