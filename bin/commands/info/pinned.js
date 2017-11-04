"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
module.exports = class PinnedCommand extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'pinned',
            group: 'info',
            memberName: 'pinned',
            description: 'sends the pinned messages of the current channel.',
            examples: ['pinned'],
        });
    }
    run(message, args) {
        const pinMsg = `Here are the **pinned messages** for
    the **channel ${message.channel.name}**`
            .replace(/\n/g, "").replace(/\s{2,}/g, " ");
        message.channel.
            send(pinMsg);
        const author = message.author;
        return message.channel
            .fetchPinnedMessages()
            .then(messages => {
            messages.array()
                .forEach(message => { message.channel.send(message.content); });
        });
    }
};
//# sourceMappingURL=pinned.js.map