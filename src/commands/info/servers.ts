import { Command, CommandMessage } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';

module.exports = class ServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'servers',
      group: 'info',
      memberName: 'servers',
      description: 'Lists RPGMakerMV Discord Servers.',
      examples: ['servers', 'srvr'],
      aliases: ['server', 'serv', 'srvrs', 'srvr'],
      throttling: {
        usages: 2,
        duration: 180,
      }
    });
  }

  async run(message: CommandMessage) {
    const data = await Utils.getFile("./public/servers.json");
    const servers = JSON.parse(data as string) as IServer[];
    const serverEmbed = new RichEmbed({
      title: "MV Developers",
    });
    serverEmbed.setColor("#2874A6");
    servers.sort((a, b) => a.name.localeCompare(b.name)).forEach((server) => {
      serverEmbed.addField(server.name, server.url);
      serverEmbed.addField("Description", server.description);
    });
    return message.say(serverEmbed);
  }
};

interface IServer {
  name: string;
  description: string;
  url: string;
}
