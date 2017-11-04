import { Command, CommandMessage } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';

module.exports = class MasterListCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'masterlist',
      group: 'info',
      memberName: 'masterlist',
      description: 'Master list of MV plugins.',
      examples: ['mlist', 'masterlist'],
      throttling: {
        usages: 2,
        duration: 180,
      },
      aliases: ["mlist", "masterslist"]
    });
  }

  run(message: CommandMessage) {
    return message
      .say(`Master List: http://mvplugins.com/master-list`);
  }
};

