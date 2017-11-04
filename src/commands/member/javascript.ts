/* Licensed under the Apache License 2.0 */
import { Command, CommandMessage } from 'discord.js-commando';
import * as mathjs from 'mathjs';
import * as safeEval from 'safe-eval';

module.exports = class JavaScriptCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'javascript',
      group: 'member',
      memberName: 'javascript',
      description: 'Allows the user to enter basic JavaScript',
      examples: ['js var a = 3; a++;', 'js Object.prototype'],
      args: [
        {
          key: 'text',
          prompt: 'Enter valid JavaScript',
          type: 'string'
        }
      ],
      aliases: ["js", "javas", "jscript"]
    });
  }
  run(message:CommandMessage, args) {
    const { text } = args;
    try {
      return message.say(
        `${"```js"}
${safeEval(`${cleanContents(message.cleanContent)}`)}
${"```"}
`.trim());
    } catch (err) {
      console.error(err);
    }
  }
};

function cleanContents(js: string) {
  return js.replace("~>js", "")
    .replace("require", "")
    .replace("console", "")
    .replace("while", "")
    .replace("for", "");
}
