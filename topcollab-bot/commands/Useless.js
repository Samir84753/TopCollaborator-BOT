module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('742607080560656426');
    const member = message.mentions.members.first();

    member.roles.add(epicRole);
    message.channel.send('Added to Useless list')
}

module.exports.config = {
    name: "useless",
    description: "",
    usage: ">useless",
    accessableby: "Members",
    aliases: []
}