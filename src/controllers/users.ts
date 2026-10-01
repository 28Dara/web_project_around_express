import type { RequestHandler } from 'express';
import { readDataFile } from '../reader.js';

interface User {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

const getUsers: RequestHandler = async (req, res) => {
  const users = await readDataFile('users.json');
  res.json(users);
};

const getUserById: RequestHandler = async (req, res) => {
  const users: User[] = await readDataFile('users.json');
  const user = users.find((savedUser) => savedUser._id === req.params.userId);

  if (!user) {
    res.status(404).json({ message: 'ID de usuario no encontrado' });
    return;
  }

  res.json(user);
};

export { getUsers, getUserById };
