const commando = require('discord.js-commando');
const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const fetch = require('node-fetch');
const unsplash_client_id = 'unsplashapikey';

var name = "photo"

module.exports.run = async (bot, msg, args) => {
        var text = args;
        if (args.length < 1) {
            msg.reply("Add some search terms to your command, so I know what photos to get you.");
        }

        else {  
            // Necessary for choosing random colours for rich embeds
            // var colour_array = ["1211996", "3447003", "13089792", "16711858", "1088163", "15098851", "16777215"]
            // var randomNumber = getRandomNumber(0, colour_array.length - 1);
            // var randomColour = colour_array[randomNumber];

            var search_query = text;

            var photo_link = `https://api.unsplash.com/search/photos/?client_id=${unsplash_client_id}&query=${search_query}`
            fetch(photo_link)
                .then(res => res.json())
                .then((out) => {
                    if (out.total == 0) {
                        msg.reply(`I couldn't find any Unsplash images related to ${search_query}`)
                    }
                    else {
                        var randomImageIndex;
                        if (out.total < 10) {
                            randomImageIndex = getRandomNumber(0, out.total - 1)
                        }
                        else {
                            randomImageIndex = getRandomNumber(0, 9)
                        }
                        var first_img_link = out.results[0].urls.raw
                        var first_img_user = out.results[0].user.username
                        var random_img_link = out.results[randomImageIndex].urls.raw
                        var random_img_user = out.results[randomImageIndex].user.username

                        msg.channel.send({
                            embed: {
                                description: `[${random_img_user}](https://unsplash.com/@${random_img_user}) on [Unsplash](https://unsplash.com)`,
                                title: `Images From Unsplash Related To ${search_query}`,
                                image: {
                                    url: random_img_link
                                },
                                fields: [
                                    {
                                        name: "Original Image",
                                        value: "[Original image found here](https://unsplash.com)"
                                    }]
                            }
                        });
                    }

                })
                .catch(err => { throw err });

        }

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }
module.exports.config = {
        name: "photo",
        description: "You can summon pictures",
        usage: ">photo",
        accessableby: "Members",
        aliases: []
    }
