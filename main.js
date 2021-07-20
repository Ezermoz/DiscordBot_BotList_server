const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const config = require("./config.js")

fs.readdir("./Events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./Events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Events load: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./Events/${file}`)];
    });
});

fs.readdir("./Commandes/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Commandes/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Commande load: ${commandName}`);
    });
});

client.on('ready', () => {
    client.user.setActivity(`${client.user.username} | ${config.discord.prefix}help`, {
        type: "WATCHING"
      });
    console.log(`\n${client.user.tag} load !`)
})
client.login(config.discord.token)