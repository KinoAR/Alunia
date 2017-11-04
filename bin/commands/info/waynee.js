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
const Utils = require("../../services/utils");
module.exports = class WayneeCommand extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'waynee',
            group: 'info',
            memberName: 'waynee',
            description: 'Lists waynee\'s beginner JavaScript tutorials collection.',
            examples: ['waynee'],
            throttling: {
                usages: 2,
                duration: 180,
            }
        });
    }
    run(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Utils.getFile("./public/waynee.txt");
            console.log(data);
            return message.say(data);
        });
    }
};
//# sourceMappingURL=waynee.js.map