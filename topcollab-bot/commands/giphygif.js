const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const fetch = require('node-fetch');
const Discord = require('discord.js');
var giphy_api_key = 'pKPN8dRk3hotBlR6kD06h4qkqcWZO60S';

var name = "gif";



module.exports.run = async (bot, message, args) => {
    var text = args;
        if (args.length < 2) {
            message.reply("Only search terms to your command that makes sense. :grin:");
        }

        else {
            var limit = 5;
            var search_term = text;
            var giphy_endpoint = `https://api.giphy.com/v1/gifs/search?rating=g&api_key=${giphy_api_key}&limit=${limit}&q=${search_term}`
            fetch(giphy_endpoint)
                .then(res => res.json())
                .then((out) => {
                    
                     if (out.data.length === 0) {
                         message.reply("Couldn't find any matching GIFS :(")
                    }
                    else {
                        var randomNumber = getRandomNumber(0, limit - 1)
                        var giphy_link = out.data[randomNumber].embed_url;
                       
                        // msg.reply(giphy_link)
                        message.channel.send(giphy_link);
    
                        //  // Send an embed with a local image inside
                        // message.channel.send({
                        //     files: [
                        //         "media/powered_by_giphy.png",
                        //     ]
                        // })
                            // .catch(console.error);
                    }
    
                })
                // .catch(err => { throw err });
        }

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }

module.exports.config = {
    name: "giphy",
    description: "You can summon gifs",
    usage: ">giphy",
    accessableby: "Members",
    aliases: []
}
// module.exports = class GIFCommand extends commando.Command {
//     constructor(client) {
//         super(client, {
//             name: 'gif',
//             aliases: [],
//             group: 'media',
//             memberName: 'gif',
//             description: "Search GIPHY for GIFS!",
//             details: "Search GIPHY for GIFS!",
//             examples: ["gif"]
//         });
//     }

//     async run(msg, args) {
//         var text = args;
//         if (args.length < 2) {
//             msg.reply("Add some search terms to your command, so I know what GIFS to get you. :grin:");
//         }

//         else {
//             var limit = 5;
//             var search_term = text;
//             var giphy_endpoint = `https://api.giphy.com/v1/gifs/search?rating=g&api_key=${giphy_api_key}&limit=${limit}&q=${search_term}`
//             console.log(giphy_endpoint)
//             fetch(giphy_endpoint)
//                 .then(res => res.json())
//                 .then((out) => {
//                     console.log(out)
//                      if (out.data.length === 0) {
//                          msg.reply("Couldn't find any matching GIFS :(")
//                     }
//                     else {
//                         var randomNumber = getRandomNumber(0, limit - 1)
//                         var giphy_link = out.data[randomNumber].embed_url;
//                         console.log(giphy_link)
//                         msg.reply(giphy_link)
    
//                          // Send an embed with a local image inside
//                         msg.channel.send({
//                             files: [
//                                 "media/powered_by_giphy.png",
//                             ]
//                         })
//                             .catch(console.error);
//                     }
    
//                 })
//                 .catch(err => { throw err });
//         }

//         function getRandomNumber(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min;
//         }

//     }
// };