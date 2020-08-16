const fetch = require('node-fetch');
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports.run= async (bot, message, args) => {

 
    // thanks to https://evilinsult.com :)
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
      .then(res => res.json())
      .then(json => {
        const embed = new MessageEmbed()
          
          .setTitle('Evil Insult')
          .setDescription(json.insult)
          .setURL('https://evilinsult.com');
        return message.channel.send(embed);
      })
      .catch(err => {
        console.log('Failed to deliver insult :sob:');
        return console.error(err);
      });
  }
module.exports.config = {
    name: "insult",
    description: "You can summon random insults",
    usage: ">insult",
    accessableby: "Members",
    aliases: []
}