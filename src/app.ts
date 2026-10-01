import express from 'express';
import router from './routes/index.js';
import type { ErrorRequestHandler } from 'express';

const app = express();

app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

const handleServerError: ErrorRequestHandler = (error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Ha ocurrido un error en el servidor' });
};

app.use(handleServerError);
app.use(router);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
