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
const path = require("path");
const fs = require("fs");
const Utils = require("../../services/utils");
module.exports = class PluginDevs extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'devs',
            group: 'member',
            memberName: 'devs',
            description: 'Lists a set of plugin developers.',
            examples: ['devs', 'plugindevs'],
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
function getDevs() {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = "./public/pluginDevs.json";
        return new Promise((resolve, reject) => {
            fs.readFile(path.resolve(filePath), "utf8", (err, data) => {
                if (err)
                    reject(err);
            });
        });
    });
}
//# sourceMappingURL=pluginDevs.js.map