import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import { Skin } from 'tistory-skin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async function (directoryPath: string) {
  const skin = new Skin(String(process.env.BLOG_URL), String(process.env.TSSESSION));
  const filePaths = getAllFilePaths(directoryPath);

  for (const filePath of filePaths) {
    const { data } = await skin.upload(filePath);
    console.log(data);
  }
})(path.join(__dirname, '../dist'));

/**
 * 주어진 디렉터리에서 모든 파일 경로를 재귀적으로 가져옵니다.
 *
 * @param {string} directoryPath - 검색할 디렉터리 경로
 * @returns {string[]}
 */
function getAllFilePaths(directoryPath: string) {
  let filePaths: string[] = [];
  const dirents = fs.readdirSync(directoryPath, { withFileTypes: true });

  dirents.forEach((dirent) => {
    const fullPath = path.join(directoryPath, dirent.name);

    if (dirent.isDirectory()) {
      filePaths = filePaths.concat(getAllFilePaths(fullPath));
    } else if (dirent.isFile()) {
      filePaths.push(fullPath);
    }
  });

  return filePaths;
}
