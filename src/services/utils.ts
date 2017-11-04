import * as path from 'path';
import * as fs from 'fs';

export async function getFile(filePath: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), "utf8", (err, data) => {
      if (err)
        reject(err);
      else
        resolve(data);
    });
  });
}    

export const formatTimeString =
  (time: number, num: number) =>
    (time % num < 10) ? '0' + time % num : `${time % num}`;
export const formatUpTimeString =
  (time: number) => (time < 10) ? '0' + time : `${time}`;
export const secondsToStandardTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const timeString =
    `${formatTimeString(hours, 24)}:
    ${formatTimeString(minutes, 60)}:${formatTimeString(seconds, 60)}`
      .replace(/\n/g, "");
  return timeString;
};

export const secondsToUpTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const timeString = `${formatUpTimeString(hours)} Hours, 
  ${formatTimeString(minutes, 60)}:${formatTimeString(seconds, 60)}`
    .replace(/\n/g, "");
  return timeString;
};


export function capitalize(string: string) {
  const copy = string.slice();
  return copy.charAt(0).toUpperCase() + copy.slice(1);
}

export function clamp(min: number, max: number) {
  return Math.min(Math.max(min), max);
}

export function replaceText(re: RegExp, replaceText: string) {
  return (text: string, ) => {
    return text.replace(re, replaceText);
  };
}

export function prettify(data: object) {
  return JSON.stringify(data, null, 2);
}

export function removeLineBreak(string: string) {
  return string.replace(/\\n\\r|\n/ig, "").replace(/\s{2,}/gi, " ");
}
