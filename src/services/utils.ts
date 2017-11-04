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
