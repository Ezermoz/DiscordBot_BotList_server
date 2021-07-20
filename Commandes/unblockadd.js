const Discord = require('discord.js');
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
    if(message.author.id != ["740180226490761267"]) return message.channel.send("Tu n'est pas dans la liste des propriétaire, tu ne peut donc pas éxécuté cette commande !")
    let userId = args[0]
    if(!userId) { return message.channel.send("Mets l'id de quelqun !")}

   let userIsB = db.fetch(`blockadd_${userId}`)
   if(userIsB === 1) {
       db.delete(`blockadd_${userId}`)
   }
    
        return message.channel.send(`<@${userId}> peut re-ajouté des bot !`)
}