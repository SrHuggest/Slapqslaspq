const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply({embed: {
      color: 0xC64540,
      description: `${message.author}, :x: | Sem permissão.`
    }});
let DMALL = args.join(" ").slice(0);
if (!DMALL) return message.channel.send({embed: {
color: 0xC64540,
description: `${message.member}, :x: | Por favor, insira uma mensagem para DM todos os jogadores no servidor discord.`
}});

message.guild.members.forEach((player) => {
  message.guild.member(player).send({embed: {
    color: 0x00c1c1,
    title: `${message.guild.name}`,
    description: `${DMALL}`
  }});
});
message.channel.send({embed: {
color: 0xC64540,
description: "Pronto, enviei a mensagem para todos os membros deste servidor."
}});
}
module.exports.help = {
    name: "bugreport"
  }
