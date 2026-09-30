import fs from 'node:fs/promises';
import path from 'node:path';

const dataPath = path.join(import.meta.dirname, '../data');

const readDataFile = async (fileName: string) => {
  const content = await fs.readFile(path.join(dataPath, fileName), 'utf-8');
  return JSON.parse(content);
};

export { readDataFile };
