"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Licensed under the Apache License 2.0 */
const discord_js_commando_1 = require("discord.js-commando");
const safeEval = require("safe-eval");
module.exports = class JavaScriptCommand extends discord_js_commando_1.Command {
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
    run(message, args) {
        const { text } = args;
        try {
            return message.say(`${"```js"}
${safeEval(`${cleanContents(message.cleanContent)}`)}
${"```"}
`.trim());
        }
        catch (err) {
            console.error(err);
        }
    }
};
function cleanContents(js) {
    return js.replace("~>js", "")
        .replace("require", "")
        .replace("console", "")
        .replace("while", "")
        .replace("for", "");
}
//# sourceMappingURL=javascript.js.map