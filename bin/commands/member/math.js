"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Licensed under the Apache License 2.0 */
const discord_js_commando_1 = require("discord.js-commando");
const mathjs = require("mathjs");
module.exports = class MathCommand extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'math',
            group: 'member',
            memberName: 'math',
            description: 'allows the user to enter math equations.',
            examples: ['math f(x) = 3x + 4; f(3)', 'math 2 + 2', 'math 3 * 3 * 3^2'],
            args: [
                {
                    key: 'text',
                    prompt: 'Enter a mathematical equation',
                    type: 'string'
                }
            ]
        });
    }
    run(message, args) {
        const { text } = args;
        try {
            return message.say(`${"```js"}
${mathjs.eval(text)}
${"```"}
`.trim());
        }
        catch (err) {
            console.error(err);
        }
    }
};
//# sourceMappingURL=math.js.map