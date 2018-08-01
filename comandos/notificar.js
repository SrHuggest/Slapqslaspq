const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let Role = message.guild.roles.find("name", `Novidades`);
  if(!Role) { return message.reply(":x: Não vi nenhum cargo com o nome de `Novidades`");
} else {
};
if(message.member.roles.has(Role.id)) {
  message.guild.member(message.author.id).removeRole(Role.id)
message.author.send(`:frowning: **|** Opa, você já esteve com o cargo. Caso seja sua escolha, eu removi-o para você.`)
} else {
 message.guild.member(message.author.id).addRole(Role.id).catch(console.error);

}
}

module.exports.help = {
    name:"mute"
  }