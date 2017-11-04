import { Command, CommandMessage } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';

module.exports = class ResourcesCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'resources',
      group: 'info',
      memberName: 'resources',
      description: 'Lists a set of MV resources.',
      examples: ['resource', 'resources'],
      throttling: {
        usages: 2,
        duration: 180,
      },
      aliases: ["resource", "resource", "rsrce"]
    });
  }

  async run(message: CommandMessage) {
    const data = await Utils.getFile("./public/resources.json");
    const resources  = JSON.parse(data as string) as IResource[];
    const resourceEmbed = new RichEmbed({
      title: "MV Resources",
    });
    resourceEmbed.setColor("#2874A6");
    resources.sort((a, b) => a.name.localeCompare(b.name))
      .forEach((resource) => {
        resourceEmbed.addField(resource.name, resource.url);
      });
    return message.say(resourceEmbed);
  }
};

interface IResource {
  name: string;
  url: string;
}
