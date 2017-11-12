import * as youtubeSearch from "youtube-search";
import { Command, CommandMessage } from 'discord.js-commando';
import * as youtubeInfo from '../../youtubeToken';
var opts: youtubeSearch.YouTubeSearchOptions = {
  maxResults: 5,
  key: youtubeInfo.youtubeToken()
};

module.exports = class YoutubeCommand extends Command {
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

  async run(message, args) {
    const { text } = args;
    const results = await getYoutubeResults(text) as any;
    return message.say(
      `${"```Markdown\n"}

# [Youtube Search]

${results.reduce((finalString, result, index) => {
          finalString +=
            `# [${index + 1} - ${result.title}]\n* Link: ${result.link}\n\n`;
          return finalString;
        }, "")}
${"```\n  "}`.trim());
  }
};

async function getYoutubeResults(queryString: string) {
  return new Promise((resolve, reject) => {
    youtubeSearch(queryString, opts, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}
