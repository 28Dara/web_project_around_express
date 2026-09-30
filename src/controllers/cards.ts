import type { RequestHandler } from 'express';

const getCards: RequestHandler = (req, res) => {
  const tag = req.query.tag;
  res.send(`Etiqueta: ${tag}`);
};

export { getCards };
