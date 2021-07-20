const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    embed = new Discord.MessageEmbed()
                    .setFooter("Horizon - BotList")
                    .setTimestamp()
                    .setColor("BLUE")
                .setDescription("**__Liste des commandes__ :** \n> `hb!help ; hb!addbot ; hb!setdesc ; hb!botprofil`"+
                "  \n\n> `hb!blockadd ; hb!unblockadd ; hb!botaccept ; hb!botrefuse`")
        message.channel.send(embed)
}