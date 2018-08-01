const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var sugest = args.slice(0).join(" ")
        bot.guilds.get("459873104504684564").channels.get("472966590472912897").send("```Alguem reportou um bug``` \n Bug:" + sugest + "\n Quem reportou o bug:  <@" + message.author.id + ">")
    message.channel.send(`${message.author}, **Bug enviado**`)
    message.delete()
}

module.exports.help = {
    name: "bugreport"
  }
