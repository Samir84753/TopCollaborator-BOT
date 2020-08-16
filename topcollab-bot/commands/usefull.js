module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('742607080560656426');
    const member = message.mentions.members.first();

    member.roles.remove(epicRole);
    message.channel.send('Usefull now')
}

module.exports.config = {
    name: "usefull",
    description: "",
    usage: ">usefull",
    accessableby: "Members",
    aliases: []
}