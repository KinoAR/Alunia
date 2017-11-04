import { Command, CommandMessage } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';

module.exports = class WayneeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'waynee',
      group: 'info',
      memberName: 'waynee',
      description: 'Lists waynee\'s beginner JavaScript tutorials collection.',
      examples: ['waynee'],
      throttling: {
        usages: 2,
        duration: 180,
      }
    });
  }

  async run(message: CommandMessage) {
    const data = await Utils.getFile("./public/waynee.txt");
    console.log(data);
    return message.say(data);
  }
};
