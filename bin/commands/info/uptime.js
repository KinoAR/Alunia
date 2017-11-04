"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const discord_js_commando_1 = require("discord.js-commando");
module.exports = class UptimeCommand extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'uptime',
            group: 'info',
            memberName: 'uptime',
            description: 'sends a message containing the bot uptime.',
            examples: ['uptime'],
        });
    }
    run(message) {
        const time = moment(Date.now() - this.client.uptime).toNow(true);
        return message
            .say(`Alunia has been up for ${time}.`);
    }
};
//# sourceMappingURL=uptime.js.map