const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let faustao = [`${message.author}, Olha essa ferá bixo.`, `${message.author}, Ta pegando fogo bixo.`, `${message.author}, Chama o bombeiro lá.`, `${message.author}, Você destruiu o meu ovo.`, `${message.author}, Errouuuu.`]
    message.channel.send((faustao[Math.floor(faustao.length * Math.random())]))
}

    module.exports.help = {
    name: "faustao"
  }