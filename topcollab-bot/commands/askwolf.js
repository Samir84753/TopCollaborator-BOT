const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const fetch = require('node-fetch');
const Discord = require('discord.js');
const wolfram_alpha_id = '93L6RT-JK684VTUUW';

var name = "ask"


module.exports.run = async (bot, msg, args) => {
        var text = args;

        if (args.length < 1) {
            msg.reply("Add a question to your command, so I can get an answer for you :eyes");
        }
        else {

            // Necessary for choosing random colours for rich embeds
            // var colour_array = ["1211996", "3447003", "13089792", "16711858", "1088163", "16098851", "6150962"]
            // var randomNumber = getRandomNumber(0, colour_array.length - 1);
            // var randomColour = colour_array[randomNumber];

            var question = text;
            // console.log(question)
            var url_encoded_question = question.split(" ").join("%20");

            var ask_link = `http://api.wolframalpha.com/v2/query?appid=${wolfram_alpha_id}&input=${url_encoded_question}&output=json`

            fetch(ask_link)
                .then(res => res.json())
                .then((out) => {
                    var num_pods = out.queryresult.numpods;
                    if (num_pods === 0) {
                        msg.reply("Sorry, Wolfram|Alpha doesn't have an answer for that question. Try again maybe? :D")
                    }
                    else {
                        // console.log(out.queryresult)
                        var interpretation = out.queryresult.pods[0].subpods[0].plaintext;
                        // console.log(interpretation)

                        var answer = out.queryresult.pods[1].subpods[0].plaintext;
                        // console.log(answer)

                        msg.channel.send({
                            embed: {
                                // color: randomColour,
                                title: `${interpretation}`,
                                description: answer
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
        name: "ask",
        description: "You can ask questions.The answers are from Wolfram",
        usage: ">ask",
        accessableby: "Members",
        aliases: []
    }
