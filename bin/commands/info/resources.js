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
module.exports = class ResourcesCommand extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'resources',
            group: 'info',
            memberName: 'resources',
            description: 'Lists a set of MV resources.',
            examples: ['resource', 'resources'],
            throttling: {
                usages: 2,
                duration: 180,
            },
            aliases: ["resource", "resource", "rsrce"]
        });
    }
    run(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Utils.getFile("./public/resources.json");
            const resources = JSON.parse(data);
            const resourceEmbed = new discord_js_1.RichEmbed({
                title: "MV Resources",
            });
            resourceEmbed.setColor("#2874A6");
            resources.sort((a, b) => a.name.localeCompare(b.name))
                .forEach((resource) => {
                resourceEmbed.addField(resource.name, resource.url);
            });
            return message.say(resourceEmbed);
        });
    }
};
//# sourceMappingURL=resources.js.map