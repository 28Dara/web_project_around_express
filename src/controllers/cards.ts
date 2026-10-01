import type { RequestHandler } from 'express';
import { readDataFile } from '../reader.js';

const getCards: RequestHandler = async (req, res) => {
  const cards = await readDataFile('cards.json');
  res.json(cards);
};

export { getCards };
