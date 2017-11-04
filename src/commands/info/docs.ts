import { Command, CommandMessage } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';

module.exports = class DocsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'docs',
      group: 'info',
      memberName: 'docs',
      description: 'Lists documentation on RPGMakerMV.',
      examples: ['docs', 'documentation'],
      aliases: ['documentation', 'documents', 'doc'],
      throttling: {
        usages: 2,
        duration: 180,
      }
    });
  }

  async run(message: CommandMessage) {
    const data = await Utils.getFile("./public/documentation.json");
    const docs= JSON.parse(data as string) as IDoc[];
    const devEmbed = new RichEmbed({
      title: "MV Developers",
    });
    devEmbed.setColor("#2874A6");
    docs.sort((a, b) => a.name.localeCompare(b.name)).forEach((doc) => {
      devEmbed.addField(doc.name, doc.url);
    });
    return message.say(devEmbed);
  }
};

interface IDoc {
  name: string;
  description: string;
  url: string;
}
