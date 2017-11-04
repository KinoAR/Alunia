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
const path = require("path");
const fs = require("fs");
function getFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
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
exports.getFile = getFile;
exports.formatTimeString = (time, num) => (time % num < 10) ? '0' + time % num : `${time % num}`;
exports.formatUpTimeString = (time) => (time < 10) ? '0' + time : `${time}`;
exports.secondsToStandardTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const timeString = `${exports.formatTimeString(hours, 24)}:
    ${exports.formatTimeString(minutes, 60)}:${exports.formatTimeString(seconds, 60)}`
        .replace(/\n/g, "");
    return timeString;
};
exports.secondsToUpTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const timeString = `${exports.formatUpTimeString(hours)} Hours, 
  ${exports.formatTimeString(minutes, 60)}:${exports.formatTimeString(seconds, 60)}`
        .replace(/\n/g, "");
    return timeString;
};
function capitalize(string) {
    const copy = string.slice();
    return copy.charAt(0).toUpperCase() + copy.slice(1);
}
exports.capitalize = capitalize;
function clamp(min, max) {
    return Math.min(Math.max(min), max);
}
exports.clamp = clamp;
function replaceText(re, replaceText) {
    return (text) => {
        return text.replace(re, replaceText);
    };
}
exports.replaceText = replaceText;
function prettify(data) {
    return JSON.stringify(data, null, 2);
}
exports.prettify = prettify;
function removeLineBreak(string) {
    return string.replace(/\\n\\r|\n/ig, "").replace(/\s{2,}/gi, " ");
}
exports.removeLineBreak = removeLineBreak;
//# sourceMappingURL=utils.js.map