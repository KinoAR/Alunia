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
const discord_js_commando_1 = require("discord.js-commando");
const discord_js_1 = require("discord.js");
const Utils = require("../../services/utils");
module.exports = class ServerCommand extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'servers',
            group: 'info',
            memberName: 'servers',
            description: 'Lists RPGMakerMV Discord Servers.',
            examples: ['servers', 'srvr'],
            aliases: ['server', 'serv', 'srvrs', 'srvr'],
            throttling: {
                usages: 2,
                duration: 180,
            }
        });
    }
    run(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Utils.getFile("./public/servers.json");
            const servers = JSON.parse(data);
            const serverEmbed = new discord_js_1.RichEmbed({
                title: "MV Developers",
            });
            serverEmbed.setColor("#2874A6");
            servers.sort((a, b) => a.name.localeCompare(b.name)).forEach((server) => {
                serverEmbed.addField(server.name, server.url);
                serverEmbed.addField("Description", server.description);
            });
            return message.say(serverEmbed);
        });
    }
};
//# sourceMappingURL=servers.js.map