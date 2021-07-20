const Discord = require('discord.js');
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send('```hb!setdesc <id bot> <description | none>```')
    if (!args[0].length != 18 && !isNaN(parseInt(args[0]))) return message.channel.send('Aïe ! Ton identifiant est invalide :confused:.')

    let botExist = db.fetch(`bot_${args[0]}`)
        if(botExist === null || !botExist) { return message.channel.send("Ce bot n'est pas dans ma base de donnée !")}
        let the_desc = args.slice(1).join(' ');
        db.set(`botdesc_${args[0]}`, the_desc)

        let ownerisN = db.fetch(`botow_${args[0]}`)
        if(ownerisN != message.author.id) {return message.channel.send("Tu n'est pas propriétaire de ce robots, tu neux donc pas modifié ça descriptions !")}
    return message.channel.send(`Vous avez mis à jour la descriptions de <@${args[0]}> qui est maintenant à jour !`)
};
