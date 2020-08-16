const fetch = require('node-fetch');
var tenorAPI = "tenorapikey";
const { Command } = require('discord.js-commando');

module.exports.run= async (bot, message, args) => {
    fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=anime&limit=1`)
      .then(res => res.json())
      .then(json => message.channel.send(json.results[0].url))
      .catch(e => {
        message.channel.send('Failed to find a gif :slight_frown:');
        // console.error(e);
        return;
      });
  }
  module.exports.config = {
    name: "animegif",
    description: "You can summon anime gifs",
    usage: ">animegif",
    accessableby: "Members",
    aliases: []
}
