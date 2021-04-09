const Discord = require('discord.js');
const config = require('./config.json');
const package = require("./package.json")
const intents = new Discord.Intents(Discord.Intents.ALL);

const client = new Client({ws: intents});


client.on('ready', () => {
    console.log(`Bot został wykonany przez:`)
    console.log('\x1b[33m%s\x1b[0m', package.author)
    console.log("Jeśli go kupiłeś zostałeś ojebany na kaske bo jest to za free na:")
    console.log('\x1b[33m%s\x1b[0m', "https://github.com/Dezet-dev/dezet_fivemstatus")
})

client.botconfig = config;

["commands", "aliases"].forEach(x => (client[x] = new Collection()));

["./handler/events.js", "./handler/commands.js"].forEach(x => require(x)(client));


client.login(config.token);
