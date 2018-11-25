const Discord = require('discord.js');
const db = require('quick.db');
const Canvas = require('canvas');
const snekfetch = require('node-superfetch');

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let level = await db.fetch(`level_${user.id}`);
  if (level === null) level = 0;
  
  const canvas = Canvas.createCanvas(250, 250);
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = "rgb(51, 51, 51)";
  ctx.fillRect(0, 0, 250, 250);
  
  const { body: a } = await snekfetch.get(user.avatarURL);
  const avatar = await Canvas.loadImage(a);
  ctx.drawImage(avatar, 10, 10, 230, 230);
  
  ctx.fillStyle = "rgb(0, 96, 128)";
  ctx.fillRect(205, 205, 40, 40);
  
  ctx.font = "3px Arial";
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillText(`${level}`, 210, 240)
  
  const attach = new Discord.Attachment(canvas.toBuffer(), 'avatar.png');
  
  message.channel.send(attach);
  
}
