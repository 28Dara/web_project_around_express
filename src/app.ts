import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users/:userId', (req, res) => {
  const userId: string = req.params.userId;

  res.send(`ID del usuario: ${userId}`);
});

app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${port}`);
});
