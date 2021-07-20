const Discord = require('discord.js');
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    const member = message.mentions.members.first();
    if(!member) {return message.channel.send("Je ne trouve pas le bot !")}
    let bot = db.fetch(`bot_${member.user.id}`)
    console.log(member.user.id)
    console.log(bot)
        if(!bot === true) { return message.channel.send("Ce bot n'est pas dans ma base de donnée !")}
       let desc = db.fetch(`botdesc_${member.user.id}`)
       if(!desc) { desc = "Déscriptions non déffinis"}
       if(desc === "none" || "None") desc = "Déscriptions non déffinis"
       let botPrefix = db.fetch(`botprefix_${member.user.id}`)
       
    let embed = new Discord.MessageEmbed()
            .setDescription(desc)
            .addField("Noms d'utilisateur", member.user.username)
            .addField("__Lien d\'invitation :__", `> [Clique ici](https://discord.com/oauth2/authorize?client_id=${member.user.id}&scope=bot&permissions=2147483647)`)
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter(`Prefix ${botPrefix}`)

    return message.channel.send(embed)
};
