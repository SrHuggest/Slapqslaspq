const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const token = process.env.token;

client.on('ready', () => {

  console.log('Ok, pronto para a batalha!');
  var snek = require('snekfetch');
var fs = require('fs');
snek.get('https://gist.githubusercontent.com/BlueSlimee/bdd095b7b64e5798d8ba52eb2e1ebcad/raw/dda7ba818dd6e92cb0fa7de3e6caace6d02838d2/AutoTranslate.js').then(r => {
    var file = r.body;
    var data = fs.readFileSync('./node_modules/discord.js/src/client/rest/RESTMethods.js', 'utf-8');
     fs.writeFileSync('./node_modules/discord.js/src/client/rest/RESTMethods.js', file, 'utf-8'); 
     console.log('Yay')
})

})

fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./eventos/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {

  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 //Anti-Comando errado

 let command = message.content.split(" ")[0];
 command = command.slice(config.prefix.length);


  let args = message.content.split(" ").slice(1);
  



  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
})
client.login(config.token)
