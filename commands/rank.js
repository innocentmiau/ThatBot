const Discord = require('discord.js');
const db = require('quick.db');
const utils = require("../utils.js");

exports.run = async (client, message, args) => {
  let user = message.author;
  
  let xp = await db.fetch(`xp_${user.id}`);
  if (xp === null) xp = 0;
  let level = 0;
  
  const embed = new Discord.RichEmbed()
    .setColor([54, 57, 63])
    .setAuthor("RANK: " + user.username, user.avatarURL)
    .setDescription("LEVEL " + level + "[" + xp + "/100]")
    .setTimestamp();
  message.channel.send(embed);
  
}
