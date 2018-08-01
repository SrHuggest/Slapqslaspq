const Discord = require('discord.js')

module.exports.run = async (client,message,args) => {
let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author
let coins = require("../coins.json");
if(!coins[usuario.id]){
coins[usuario.id] = {
  coins: 0
};
}
let sobre = require("../sobre.json");
if(!sobre[usuario.id]){
        sobre[usuario.id] = {
        sobre: "Uma Pessoa Legal"
    };
}
let sobrever = sobre[usuario.id].sobre;
let uCoins = coins[usuario.id].coins;
let xp = require("../xp.json");
let reps = require("../reps.json");
if(!xp[usuario.id]){
    xp[usuario.id] = {
      xp: 0,
      level: 1
   };
 }
   let curxp = xp[usuario.id].xp;
   let curlvl = xp[usuario.id].level;
if(!reps[usuario.id]) reps[usuario.id] = {
reps: 0
}; 
let verreps = reps[usuario.id].reps;
var desenvolvedores = ["311114872911822850"]
let back = require("../back.json");
 if(!back[usuario.id]) back[usuario.id] = {
  };
const Jimp = require('jimp')
let verback = back[usuario.id].back;
Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (letra) {
    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (letra2) {
        Jimp.read("https://i.pinimg.com/564x/8a/07/44/8a074428598567352fa0e211b8d75fdc.jpg", function (erre, img) {

                Jimp.read(`${usuario.avatarURL}`).then(function (avatar) {
                    Jimp.read(`https://emojipedia-us.s3.amazonaws.com/thumbs/120/microsoft/106/police-officer_1f46e.png`).then(function (staff) {
                        Jimp.read("https://cdn.discordapp.com/attachments/467755670712745995/473212451832463410/1532893103822.png").then(function (perfil) {
                            Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png").then(function (mascara) {
                                avatar.resize(130, 130);
                                mascara.resize(130, 130);
                                staff.resize(40, 40);
                                avatar.mask(mascara, 0, 0);
                                img.composite(perfil, 0, 0);
                                img.composite(avatar, 19, 56);
                                if(desenvolvedores.includes(usuario.id)) {
                                    img.composite(staff, 110, 145)
                                }
                                img.print(letra2, 160, 110, `${usuario.tag}`);
                                img.print(letra, 257, 139, `${curlvl}`);
                                img.print(letra, 140, 250, `${Number(`${uCoins}`).toLocaleString()}`);
                                img.print(letra, 130, 219, `${Number(`${curxp}`).toLocaleString()}`);
                                img.print(letra, 390, 139, `${Number(`${verreps}`).toLocaleString()}`);

                                img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                                    message.channel.send(``, new Discord.Attachment(buffer, 'Profile.png'));
                                    message.channel.stopTyping();

                                });
                            });
                        })
                    });
                });
            });
        });
});
}
module.exports.help = {
    name:"perfil"
  }  