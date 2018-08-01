const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    let abracUser = message.guild.member(message.mentions.users.first());
    if (!abracUser) return message.channel.send("Você usou o comando incorretamente: use >!abracar @user)")

    let abracEmbed = new Discord.RichEmbed()
        .setDescription("Aiiii")
        .addField("Você ganhou o tapa:", `${abracUser}`)
        .addField("Quem deu o tapa:", `${message.author}`)
        .setImage('http://s9.favim.com/orig/140728/ariana-grande-cat-funny-victorious-Favim.com-1949139.gif')


    message.channel.sendMessage(abracEmbed);


}
    module.exports.help = {
        name:"tapa"
      }