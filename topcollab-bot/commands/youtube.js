const commando = require('discord.js-commando');
const Discord = require('discord.js');
var emoji = require("emojilib") // A JSON file containing emoji and their English meanings.
emoji = emoji.lib;
var youtube_api_key = 'AIzaSyAJvlHKCX5rYu43YvSFbI4XoPEa9fWEXIw';

var name = "yt";

module.exports.run = async (bot, message, args) => {
        var search_query = args;
        // console.log(search_query);
        if (args.length < 1 ) {
            message.reply("Make sure to add some search terms so I know what YouTube video to get you.");
        }

        else {
            const { google } = require('googleapis');
    
            const youtube = google.youtube({
                version: 'v3',
                auth: youtube_api_key
            });
    
            // Function is placed here, because I may require calling this function in the future.
            async function searchYouTube(msg, search_term) {
                const res = await youtube.search.list({
                    part: 'id,snippet',
                    q: search_term,
                    type: 'video'
                });

                if (res.data.pageInfo.totalResults === 0) {
                    message.reply("No results found :( Try another search maybe?")
                }
                else {
                    var video_id = res.data.items[0].id.videoId;
                    var video_url = `https://www.youtube.com/watch?v=${video_id}`
                    message.reply(video_url)
                }
            }
            searchYouTube(message, search_query);
    
        }
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }
module.exports.config = {
        name: "yt",
        description: "You can summon youtube videos",
        usage: ">yt",
        accessableby: "Members",
        aliases: []
    }