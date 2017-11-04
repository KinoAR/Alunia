"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
module.exports = class FrenchBreadCommand extends discord_js_commando_1.Command {
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
    run(message) {
        const intellisense = 'http://endlessillusoft.com/rpgmakermv-intellisense/';
        const vsc = 'https://code.visualstudio.com/';
        return message
            .say(`Adopt :french_bread: Today: ${vsc} ${intellisense}`);
    }
};
//# sourceMappingURL=frenchbread.js.map