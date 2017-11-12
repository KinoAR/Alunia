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
const youtubeSearch = require("youtube-search");
const discord_js_commando_1 = require("discord.js-commando");
const youtubeInfo = require("../../youtubeToken");
var opts = {
    maxResults: 5,
    key: youtubeInfo.youtubeToken()
};
module.exports = class YoutubeCommand extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'yt',
            group: 'search',
            memberName: 'yt',
            description: 'returns a list of youtube video links.',
            examples: ['yt Hello World', 'yt #BotLivesMatter'],
            args: [
                {
                    key: 'text',
                    prompt: 'What would you like the bot to search for on youtube?',
                    type: 'string'
                }
            ],
            aliases: ['youtube', 'utube', 'youtubes']
        });
    }
    run(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text } = args;
            const results = yield getYoutubeResults(text);
            return message.say(`${"```Markdown\n"}

# [Youtube Search]

${results.reduce((finalString, result, index) => {
                finalString +=
                    `# [${index + 1} - ${result.title}]\n* Link: ${result.link}\n\n`;
                return finalString;
            }, "")}
${"```\n  "}`.trim());
        });
    }
};
function getYoutubeResults(queryString) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            youtubeSearch(queryString, opts, (err, results) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    });
}
//# sourceMappingURL=youtube.js.map