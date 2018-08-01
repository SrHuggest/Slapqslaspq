const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id === '311114872911822850') {
        if (!args || args.size < 1) return message.channel.send("Coloque o comando que deseja reiniciar.");
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        message.channel.send(`Eu reinicei **${args[0]}** pra você.`)
    }

}
module.exports.help = {
    name: "setrole"
  }