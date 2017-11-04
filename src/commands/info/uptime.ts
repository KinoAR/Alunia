import * as Utils from '../../services/utils';
import * as moment from 'moment';
import { Command, CommandMessage } from 'discord.js-commando';

module.exports = class UptimeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'uptime',
      group: 'info',
      memberName: 'uptime',
      description: 'sends a message containing the bot uptime.',
      examples: ['uptime'],
    });
  }

  run(message: CommandMessage) {
    const time = moment(Date.now() - this.client.uptime).toNow(true);
    return message
      .say(`Alunia has been up for ${time}.`);
  }
};
