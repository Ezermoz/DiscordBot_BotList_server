const Discord = require('discord.js');
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
let userIsb = db.fetch(`blockadd_${message.author.id}`)   
    if(userIsb === 1) { return message.channel.send("Un des propriétaire t'as interdit l'accès a cette commande !")}

    let botId = args[0]
    let botPrefix = args[1]

    if (message.mentions.members.first()) {
        return message.channel.send(`Désolé <@${message.author.id}>, mais je ne prends pas en charge les mentions. Essaies plutôt avec un identifiant !`)
    }
    if(!botId) { return message.channel.send("Vous n'avez pas saisie corectement l'id du bot !")} 
    if(!botPrefix) { return message.channel.send("Quel est le prefix? Tu la oublié...")}

    const member = await client.users.fetch(`${botId}`);
    
    let existeorNot = db.fetch(`bot_${botId}`)
 
 if (!member.bot) {
    return message.channel.send('Cet identifiant ressemble à celui d\'un utilisateur ! !\nEssaie avec l\'identifiant d\'un bot :wink:')
}

else if (existeorNot = true) {
    let dddd = new Discord.MessageEmbed()
        .setDescription(`Ce bot est déjà enregistré dans ma base de données ! `)
    return message.channel.send(dddd)
}
if (args[0].length === 18) {
    const member = await client.users.fetch(`${botId}`);
    client.channels.cache.get("866002824701149184").send(`<@${message.author.id}> / \`<@&782676062306959413>\``, {
        embed:{
            title: 'Demande d\'ajout...',
            timestamp: new Date(),
            thumbnail: {
                url: member.displayAvatarURL()
            },
            color: '#66DA61',
            description: "<@&866012744057749514> | Ajouts d'un bot de la pars de "+message.author.tag+" \n **ID**: "+botId+`\nIl a demandé à ajouter le bot [${member.username}#${member.discriminator}](https://discord.com/oauth2/authorize?client_id=${member.id}&scope=bot&permissions=0). Un vérificateur va bientôt s’occuper de lui.`
        }
    })
    db.set(`bot_${member.id}`, true)
    db.set(`botow_${member.id}`, message.author.id)
    db.set(`botprefix_${member.id}`, botPrefix)
    return message.channel.send("Voilà ! Votre bot à été ajouté en lise d'attente :)")
    
}else{
    return message.channel.send("L'id du bot est invalide !")
}
    
};
