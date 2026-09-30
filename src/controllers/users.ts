import fs from 'node:fs/promises';
import path from 'node:path';
import type { RequestHandler } from 'express';

const usersPath = path.join(import.meta.dirname, '../../data/users.json');

const getUsers: RequestHandler = async (req, res) => {
  const data = await fs.readFile(usersPath, 'utf-8');
  res.json(JSON.parse(data));
};

export { getUsers };
