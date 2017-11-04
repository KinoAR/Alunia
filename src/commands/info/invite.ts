import { Command, CommandMessage } from 'discord.js-commando';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';

module.exports = class PluginDevs extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      group: 'member',
      memberName: 'invite',
      description: 'Sends an invite link.',
      examples: ['inv', 'invite'],
      aliases: ['inv', 'invites']
    });
  }

  async run(message: CommandMessage) {
    const link = await Utils.getFile("./public/invite.txt");
    return message.author.send(`Invite Alunia: ${link}`);
  }
};

async function getLink() {
  const filePath = "./public/invite.txt";
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), "utf8", (err, data) => {
      if (err)
        reject(err);
      else
        resolve(data);
    });
  });
}
