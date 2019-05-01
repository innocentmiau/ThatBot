const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
  
  if (!message.member.voiceChannel) return message.channel.send("Entra num voice channel!");
  
  if (message.guild.me.voiceChannel) return message.channel.send("Eu já estou a tocar música!");
  
  if (!args[0]) return message.channel.send("Insere um url!");
  
  let validate = await ytdl.validateURL(args[0]);
  
  if (!validate) return message.channel.send("Esse vídeo está em privado ou está bloqueado em certos países!");
  
  let info = await ytdl.getInfo(args[0]);
  
  let connection = await message.member.voiceChannel.join();
  
  await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));
  
  message.channel.send(`A tocar: **${info.title}**!`);
  
}
