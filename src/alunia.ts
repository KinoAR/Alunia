#! /usr/bin/env node
import { CommandoClient } from 'discord.js-commando';
import * as path from 'path';
import * as id from "./clientToken";
const prefix = (process.env.NODE_ENV === 'production') ? '~>' : '~>';
const token: string = id.clientID();
const loginToken = (process.env.NODE_ENV === 'production') ? token : token; 
const client = new CommandoClient({
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
