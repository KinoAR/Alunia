#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
const path = require("path");
const id = require("./clientToken");
const prefix = (process.env.NODE_ENV === 'production') ? '~>' : '~>';
const token = id.clientID();
const loginToken = (process.env.NODE_ENV === 'production') ? token : token;
const client = new discord_js_commando_1.CommandoClient({
    commandPrefix: prefix,
    owner: ['206982177378926592'],
    disableEveryone: true,
});
client.registry
    .registerDefaultTypes()
    .registerGroups([
    ['admin', 'Admin'],
    ['member', 'Member'],
    ['info', 'Information'],
    ['developer', 'Developer']
])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, "commands"));
client.on('ready', () => { console.log("Alunia is ready."); });
client.on('commandRun', (command, promise, message) => {
    console.log(message.content);
});
client.login(loginToken).then(() => {
    console.log(`Connected as: ${client.user.username}`);
    client.user.setPresence({ game: { name: "RMMV | ~>help" } });
});
//# sourceMappingURL=alunia.js.map