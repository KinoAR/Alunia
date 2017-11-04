import { Command, CommandMessage } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';

module.exports = class PluginDevsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'devs',
      group: 'info',
      memberName: 'devs',
      description: 'Lists a set of plugin developers.',
      examples: ['devs', 'plugindevs'],
      throttling: {
        usages: 2,
        duration: 180,
      }
    });
  }

  async run(message: CommandMessage) {
    const data = await Utils.getFile("./public/pluginDevs.json");
    const devs = JSON.parse(data as string) as IDev[];
    const devEmbed = new RichEmbed({
      title: "MV Developers",
    });
    devEmbed.setColor("#2874A6");
    devs.sort( (a, b) => a.name.localeCompare(b.name)).forEach((dev) => {
      devEmbed.addField(dev.name, dev.url);
    });
    return message.say(devEmbed);
  }
};

interface IDev {
  name: string;
  url: string;
}
