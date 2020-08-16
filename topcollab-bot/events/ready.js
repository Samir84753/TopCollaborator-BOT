const Discord = require("discord.js")
let watching = [

    `Top Collaborators`,
   `Youtube`,
   'Reddit',
   'Stupid Peoples Chat',
   'Web Technology'
   
]

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    setInterval(function() {
    let rand_activity= watching[Math.floor(Math.random() * watching.length)];
    bot.user.setActivity(rand_activity, {type: "WATCHING"});
    // bot.user.setPresence({
    //     status: "online",  //You can show online, idle....
    //     game: {
    //         name: ">help",  //The message shown
    //         type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
    //     }
    // });
}, 20000)
}