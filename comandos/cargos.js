const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let cargos;
    let cargspv = message.author
if (message.guild.roles.size === 0) cargos = 'Este servidor não tem nenhum cargo ;-;.';
else cargos = `**Cargos de ${message.guild.name}**\n${message.guild.roles.map(e => e).join(' ')}`;
message.channel.send(cargos);


}
module.exports.help = {
    name: "emojis"
  }