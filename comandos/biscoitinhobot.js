const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
// Create a new webhook
const hook = new Discord.WebhookClient('477101086222581760', '2xPU6dDvQ6QPIiIbmcECLU0DA5mwqNgcY_CAeTfUSdnTvfrqenHqSgTI0pSzzJifAqgs');

const mensagens = ["Como vai você", "Aqui esta tudo bem e por ai?", "Oi", "Eu vou contar uma historia, eu tava andando de xt e vi um corsinha amarelo e fim."]

// Send a message using the webhook
hook.send(mensagens[Math.floor(mensagens.length * Math.random())]);
}


module.exports.help = {
    name: "memes"
  }