import express from 'express';
import router from './routes/index.js';
import mongoose from 'mongoose';
import { errorHandler } from './middleware/error-handler.js';

const app = express();

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/aroundb');
app.use((req, res, next) => {
  req.user = {
    _id: '6acf02e2d597713d7eaef9c0',
  };

  next();
});
app.use(router);

app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

app.use(errorHandler);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
