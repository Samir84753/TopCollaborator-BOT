const fetch = require('node-fetch');
var tenorAPI = "K091LL6PZ8SH";
const { Command } = require('discord.js-commando');

module.exports.run= async (bot, message, args) => {
    var text = args;
    if (args.length < 2) {
        message.reply("Only search terms to your command that makes sense. :grin:");
    }
else{
    var search_term = text;
    fetch(`https://api.tenor.com/v1/search?key=${tenorAPI}&q=${search_term}&limit=1`)
    // fetch('https://api.tenor.com/v1/search?q=${search_term}&key=${tenorAPI}&limit=8')
      .then(res => res.json())
      .then(json => message.channel.send(json.results[0].url))
      .catch(e => {
        message.channel.send('Failed to find a gif :slight_frown:');
        // console.error(e);
        return;
      });
  }}
  module.exports.config = {
    name: "tenor",
    description: "You can summon tenor gifs",
    usage: ">tenor",
    accessableby: "Members",
    aliases: []
}