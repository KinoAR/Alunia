/* Licensed under the Apache License 2.0 */
import { Command, CommandMessage } from 'discord.js-commando';
import { RichEmbed } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';
import * as Utils from '../../services/utils';
const basePath = 'https://kinoar.github.io/rmmv-doc-web/';
module.exports = class DocSearchCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'docsearch',
      group: 'search',
      memberName: 'docsearch',
      description: 'Searches the RMMV doc.',
      examples: ['docsearch $gameVariables',
        'docsearch $gameActors',
        'docsearch Game_Actor'],
      args: [
        {
          key: 'text',
          prompt: 'Enter a search string',
          type: 'string'
        }
      ],
      aliases: ['dsearch', 'doc-search']
    });
  }
  async run(message, args) {
    const { text } = args;
    const data = await Utils.getFile("./public/docLinks.json");
    const docLinks = JSON.parse(data as string) as IDocLink[];
    const links = getMatchingLink(text, docLinks);
    const matchText = showMatches(links, 10);
    try {
      const docEmbed = new RichEmbed({ title: 'RMMV Doc', url: basePath });
      docEmbed.setColor("#2874A6");
      docEmbed.setTimestamp();
      links.forEach(link => {
        docEmbed.addField(link.text, link.link);
      });
      //`Here are your matching pages :sparkles: \n ${matchText}`
      return message
        .say(docEmbed);
    } catch (err) {
      console.error(err);
    }
  }
};

function getMatchingLink(search: string, links: IDocLink[]) {
  const searchString = search.replace("$", "\\$");
  const filteredLinks = links
    .filter(link => new RegExp(searchString, "ig").test(link.text));
  return filteredLinks;
}

function showMatches(links:IDocLink[], amount:number) {
  return `${"```Markdown\n"}
# RMMV Doc Web

${links.slice(0, amount).reduce((finalString, link, index) => {
    finalString += `[${link.text}](${link.link})\n\n`;
    return finalString;  
  }, "").trim()}
  ${"```"}`.trim();
}

interface IDocLink {
  text: string;
  link: string;
}
