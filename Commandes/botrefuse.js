const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
    let ow = db.fetch(`botow_${member.id}`)
    if(message.author.id != ["824008813358874735", "740180226490761267"]) return message.channel.send("Tu n'est pas dans la liste des propriétaire, tu ne peut donc pas éxécuté cette commande !")
    let botId = args[0]
    const member = await client.users.fetch(`${botId}`);
    client.channels.cache.get("866002824701149184").send(`<@${ow}> / \`<@&782676062306959413>\``, {
        embed:{
            title: 'Demande d\'ajout...',
            timestamp: new Date(),
            thumbnail: {
                url: member.displayAvatarURL()
            },
            color: '#66DA61',
            description: "<@&866012744057749514> | Acceptations d'un bot ! Accepté par: "+message.author.tag+" \n**Id**: "+botId+` [${member.username}#${member.discriminator}](https://discord.com/oauth2/authorize?client_id=${member.id}&scope=bot&permissions=0).`
        }
    })
    
};
