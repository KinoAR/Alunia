"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Licensed under the Apache License 2.0 */
const discord_js_commando_1 = require("discord.js-commando");
const discord_js_1 = require("discord.js");
const Utils = require("../../services/utils");
const basePath = 'https://kinoar.github.io/rmmv-doc-web/';
module.exports = class DocSearchCommand extends discord_js_commando_1.Command {
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
    run(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text } = args;
            const data = yield Utils.getFile("./public/docLinks.json");
            const docLinks = JSON.parse(data);
            const links = getMatchingLink(text, docLinks);
            const matchText = showMatches(links, 10);
            try {
                const docEmbed = new discord_js_1.RichEmbed({ title: 'RMMV Doc', url: basePath });
                docEmbed.setColor("#2874A6");
                docEmbed.setTimestamp();
                links.forEach(link => {
                    docEmbed.addField(link.text, link.link);
                });
                //`Here are your matching pages :sparkles: \n ${matchText}`
                return message
                    .say(docEmbed);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
};
function getMatchingLink(search, links) {
    const searchString = search.replace("$", "\\$");
    const filteredLinks = links
        .filter(link => new RegExp(searchString, "ig").test(link.text));
    return filteredLinks;
}
function showMatches(links, amount) {
    return `${"```Markdown\n"}
# RMMV Doc Web

${links.slice(0, amount).reduce((finalString, link, index) => {
        finalString += `[${link.text}](${link.link})\n\n`;
        return finalString;
    }, "").trim()}
  ${"```"}`.trim();
}
//# sourceMappingURL=doc-search.js.map