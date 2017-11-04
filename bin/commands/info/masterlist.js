"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
module.exports = class MasterListCommand extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'masterlist',
            group: 'info',
            memberName: 'masterlist',
            description: 'Master list of MV plugins.',
            examples: ['mlist', 'masterlist'],
            throttling: {
                usages: 2,
                duration: 180,
            },
            aliases: ["mlist", "masterslist"]
        });
    }
    run(message) {
        return message
            .say(`Master List: http://mvplugins.com/master-list`);
    }
};
//# sourceMappingURL=masterlist.js.map