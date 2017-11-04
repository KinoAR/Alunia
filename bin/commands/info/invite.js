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
const path = require("path");
const fs = require("fs");
const Utils = require("../../services/utils");
module.exports = class PluginDevs extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'member',
            memberName: 'invite',
            description: 'Sends an invite link.',
            examples: ['inv', 'invite'],
            aliases: ['inv', 'invites']
        });
    }
    run(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const link = yield Utils.getFile("./public/invite.txt");
            return message.say(`Invite Alunia: ${link}`);
        });
    }
};
function getLink() {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = "./public/invite.txt";
        return new Promise((resolve, reject) => {
            fs.readFile(path.resolve(filePath), "utf8", (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            });
        });
    });
}
//# sourceMappingURL=invite.js.map