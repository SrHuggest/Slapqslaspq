const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    let abracUser = message.guild.member(message.mentions.users.first());
    if (!abracUser) return message.channel.send("Você usou o comando incorretamente: use >!abracar @user)")

    let abracEmbed = new Discord.RichEmbed()
        .setDescription("Aiiii")
        .addField("Você ganhou um soco:", `${abracUser}`)
        .addField("Quem deu o soco:", `${message.author}`)
        .setImage('http://images6.fanpop.com/image/photos/38400000/Saitama-onepunch-man-38476815-540-300.gif')


    message.channel.sendMessage(abracEmbed);


}
    module.exports.help = {
        name:"tapa"
      }