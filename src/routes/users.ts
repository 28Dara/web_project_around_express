import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(router);

app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
