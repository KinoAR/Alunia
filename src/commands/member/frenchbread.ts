import { Command, CommandMessage } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';

module.exports = class FrenchBreadCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'frenchbread',
      group: 'info',
      memberName: 'frenchbread',
      description: 'Lists editor and intellisense combo.',
      examples: [':french_bread:', 'frenchbread'],
      throttling: {
        usages: 2,
        duration: 180,
      },
      aliases: ["french_bread", "fbread", ":french_bread:", "🥖"]
    });
  }

  run(message: CommandMessage) {
    const intellisense = 'http://endlessillusoft.com/rpgmakermv-intellisense/';
    const vsc = 'https://code.visualstudio.com/';
      return message
        .say(`Adopt :french_bread: Today: ${vsc} ${intellisense}`);
  }
};

