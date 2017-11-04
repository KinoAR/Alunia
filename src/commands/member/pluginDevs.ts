import { Command, CommandMessage } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';

module.exports = class PluginDevs extends Command {
  constructor(client) {
    super(client, {
      name: 'devs',
      group: 'member',
      memberName: 'devs',
      description: 'Lists a set of plugin developers.',
      examples: ['devs', 'plugindevs'],
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

async function getDevs() {
  const filePath = "./public/pluginDevs.json";
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), "utf8", (err, data) => {
      if (err)
        reject(err);  
    });
  });
}

interface IDev {
  name: string;
  url: string;
}
