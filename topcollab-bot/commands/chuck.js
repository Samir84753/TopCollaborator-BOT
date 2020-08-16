const fetch = require('node-fetch');
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
    // thanks to https://api.chucknorris.io
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(json => {
        const embed = new MessageEmbed()
          .setColor('#E41032')
          .setTitle('Chuck Norris Fact')
          .setDescription(json.value)
          .setURL('https://api.chucknorris.io');
        return message.channel.send(embed);
      })
      .catch(err => {
        message.channel.reply('An error occured, now fuck off');
        return console.error(err);
      });
  }

  module.exports.config = {
    name: "chuck",
    description: "You can summon chuck norris jokes",
    usage: ">chuck",
    accessableby: "Members",
    aliases: []
}