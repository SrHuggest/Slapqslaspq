const Discord = require("discord.js");
const Util = require('discord.js');
const utils = require('bot-utils')
const TOKEN = process.env.TOKEN
const prefix = require("./prefix.json");
const xp = require("./xp.json")
const weather = require('weather-js');
const ytdl = require('ytdl-core');
const ytSearch = require( 'yt-search' );
const fs = require("fs");
let cooldown = new Set();
let cdseconds = 5;
let coins = require("./coins.json");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});


bot.on("ready", function () {
    console.log(`📡 Estou conectado a: ${bot.guilds.size} servidores, e ${bot.users.size} usuários.`)
    let games = [`📡 >!help | ` + bot.guilds.size + ` servers e ` + bot.users.size + ` Usuários conectados no total`,
        `🇧🇷 Lokis é um bot totalmente brasileiro.`, `😛 Me adicione em seu servidor >!invite`, `😘💰 Doe para mim em www.lokisbot.weebly.com`, `🤔 Precisando de ajuda? >!ajuda`];
    setInterval(() => {
        bot.user.setActivity(games[Math.floor(Math.random() * games.length)], { url: "https://twitch.tv/redstoneg4", type: "STREAMING" })

    }, 20000);
});




//Funções do bot/comandos.
bot.on("guildCreate", async guild => {
    console.log(`${guild.name} começou a usar o LokisBOT.`)

});


bot.on('guildMemberAdd', async member => {
    const Canvas = require('canvas');
    const snekfetch = require('snekfetch');
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
        let fontSize = 70;

        do {
            ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 300);

        return ctx.font;
    };
    const channel = member.guild.channels.find(ch => ch.name === 'portao');
    if (!channel) return;

    const canvas = canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await canvas.loadImage('./wallpaper.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px Impact';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Seja bem vindo(a) ao servidor', canvas.width / 2.5, canvas.height / 3.5);

    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

    channel.send(`${member} `, attachment);
});

bot.on("message", message => {
    if(message.content.includes('<@467689941669904394>')){
  var embedz = new Discord.RichEmbed()
  .setAuthor('Oi, perdidinho?', message.author.displayAvatarURL)
  .setColor(message.guild.member(message.author.id).displayHexColor)
  .setDescription('Eu vi que você está meio perdido em prefixs, minha prefix é **>!**')
  .setTimestamp()
  .setFooter('LokisBOT para discord, brasileiro.')
  message.channel.send({embed : embedz})
  }
  if(message.channel.id == 460198827140579350) { 

    message.react(':lo1correct:475759735023468544')
    message.react(':lo1incorrect:475759731210977280')
    message.react(':lo1thonk:472401322939777024')
  }    
  
    if(!message.guild) return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix.PREFIX)) return;

   //Anti-Comando
  
   let command = message.content.split(" ")[0];
   command = command.slice(prefix.PREFIX.length);
  
  
    let args = message.content.split(" ").slice(1);
    
  
  
    try {
  if(cooldown.has(message.author.id)) {
  return message.reply(` ✋ | Você precisa aguardar **${cdseconds}s** para utilizar outro comando.`).then(msg => {
     setTimeout(() => {
  msg.delete()
     }, 5000)
  })
  }
      let commandFile = require(`./comandos/${command}.js`);
      commandFile.run(bot, message, args);
    cooldown.add(message.author.id)
     setTimeout(() => {
  cooldown.delete(message.author.id)
     }, cdseconds * 1000)
      var texto = ['2', '1', '3', '10', '12', '17', '23', '230', 'fj', 'dfsuih', 'ghnfiu']
   const random = texto[Math.floor(Math.random() * texto.length)];
   const Discord2 = require('discord.js');
  var embed1 = new Discord2.RichEmbed()
  
  .setDescription('Vejo que está gostando de meus comandos, se ainda não divulgou o ***Lokis*** para seus amigos. Peço que por favor, me divulgue, isso ajuda bastante para me manter online.\n**|** [Clique aqui para me adicionar em algum servidor.](https://discordapp.com/api/oauth2/authorize?client_id=467689941669904394&permissions=36826310&scope=bot)\n**|** Discord Bots: [Clique aqui!](https://discordbots.org/bot/467689941669904394)')
  .setTimestamp()
  .setColor('RED')
  .setFooter('Lokis, um bot totalmente brasileiro.', bot.user.avatarURL)
  if(random == '2') return message.channel.send({embed : embed1})
    } catch (err) {
  if (!message.content.startsWith(prefix.PREFIX)) return;
  message.channel.send('<:lo1top:472401663743754257> **|** Parece que estou carregando o comando aguarde, ou este comando não está em meu banco de dados.').then(message => {
     setTimeout(() => {
  message.delete()
     }, 1000)
  })
      console.error(err);
    }
  })


bot.login(TOKEN)