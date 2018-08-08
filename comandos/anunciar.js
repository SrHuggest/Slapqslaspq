const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":x:Você não tem permissão para utilizar este comando!");
       
suffix = suffix.split(' '); 
 if(suffix[0] == "help"){
      message.reply('**Use:** `sy!anuncie` +  `<ID do canal para ser anunciad>` +  `<Texto de anúncio>`');
      return;
    }
       
       const filtro = 'sy!'
       let txt = message.content.split(' ').slice(1); //Obtiene el contenido del mensaje y lo separa en partes.

        let channel = txt[0]; // Selecciona el primer valor en args.
        let content = txt.slice(1).join(' '); // Elimina el primer valor y mantiene el contenido.

        if(!channel || isNaN(channel)) return message.reply('Você não definiu um canal, ou se definiu, não é válido! Copie a ID do canal para definir!').catch(console.error);
        // Esto se activará si no se ha escrito la id de un canal, o si el valor no es un número.
        // Y detiene su ejecución incluso si no detecta contenido.
        if(!content) return message.reply('Você deve inserir uma mensagem para enviar.').catch(console.error);

        // Criamos um try/catch para detectar erros e evitar que o bot caia.
        try {
            let dest = client.channels.get(channel); // Obtemos canal de destino.

            if(!dest) return message.reply('Canal de **Texto** não encontrado');
            // Detiene la ejecución si no se encuentra el canal.

            dest.send(content).then((msg) => { // Enviará mensagem ao destino.
                message.reply('anunciou para um canal. \n**Mensagem:** ' + content + '\n**Mensagem com destino a:** ' + msg.channel );
                // Y envia una confirmación.
            }).catch(console.error);
        } catch (error) {
            console.error(error);
            message.reply(' :warning: Ocorreu um erro ao enviar está mensagem.').catch(console.error);
            // Caso houver erro está parte se executará.
        }
    }
module.exports.help = {
    name: "carinho"
  }