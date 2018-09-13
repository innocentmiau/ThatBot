const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setColor([113, 149, 68])
    .setAuthor("Informacao do Bot", client.user.avatarURL)
    .setDescription("Convite [aqui](https://discordapp.com/oauth2/authorize?client_id=471801754070024212&scope=bot&permissions=0)!")
    .addField("Guilds", ":desktop: " + client.guilds.size, true)
    .addField("Users", ":joystick: " + client.users.size, true)
    .addField("Channels", ":page_facing_up: " + client.channels.size, true)
    .addField("Bot Version", "v1.0.0", true)
    .addField("Pais", ":flag_pt: Portugal", true)
    .addField("Library", ":books: discord.js", true)
    .setFooter("Isto é um footer", client.user.avatarURL)
    .setTimestamp();

  message.channel.send(embed);

}
