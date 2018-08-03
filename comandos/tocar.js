const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	const youtube = new YouTube("AIzaSyAeIyG8gYJsBOwmjwbBmCBaN54saMUEPXM");
	const ytdl = require("ytdl-core")
	const ytSearch = require( 'yt-search' );
	
    if(args.length < 1) msg.reply('⬇ **|** Agora irei mostrar as músicas mais populares.')
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('<:err:449743511391305748> **|** Ocorreu um erro ao se conectar no canal de voz');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('<:err:449743511391305748> **|** Vish... Parece que não tenho a tal permissão de `CONNECT`');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('🤐 **|** Ouch, eu não posso falar como assim?! Preciso da permissão de `SPEAK`');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {

				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
console.log(playlist)
console.log(videos)
			return msg.channel.send('💾 **|** Hmm. Verifiquei `'+playlist.title+'` como uma certa lista de reprodução, vamos tocar!');
		} else {
			try {
				var video = await youtube.getVideo(url);
                                
                                
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
                                    
					let index = 0;
					var emb2 = new Discord.RichEmbed()
					.setAuthor('Seleção de músicas', client.user.avatarURL)
					.setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
					.setTimestamp()
					.setFooter('Por favor envie um número para selecionar a música de 1 à 10.', msg.author.displayAvatarURL)
						 msg.channel.send(emb2)
	
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('⏰ **|** Pelo jeito o tempo acabou e você não selecionou nenhuma das músicas. ');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);


				} catch (err) {
					console.error(err);
					return msg.channel.send('👁 Deculpe, mas eu não encontrei nenhum resultado...');
				}
			}
			return handleVideo(video, msg, voiceChannel);
        }
    }
module.exports.help = {
name: "carinho"
}