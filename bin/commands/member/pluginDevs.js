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
module.exports = class PluginDevsCommand extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'devs',
            group: 'info',
            memberName: 'devs',
            description: 'Lists a set of plugin developers.',
            examples: ['devs', 'plugindevs'],
            throttling: {
                usages: 2,
                duration: 180,
            }
        });
    }
    run(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Utils.getFile("./public/pluginDevs.json");
            const devs = JSON.parse(data);
            const devEmbed = new discord_js_1.RichEmbed({
                title: "MV Developers",
            });
            devEmbed.setColor("#2874A6");
            devs.sort((a, b) => a.name.localeCompare(b.name)).forEach((dev) => {
                devEmbed.addField(dev.name, dev.url);
            });
            return message.say(devEmbed);
        });
    }
};
//# sourceMappingURL=pluginDevs.js.map