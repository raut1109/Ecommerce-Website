import express from "express"
import { createUser, deleteUser, getAllUser, updateUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post('/user', createUser);
userRoutes.get('/user', getAllUser);
userRoutes.delete('/user/:id', deleteUser)
userRoutes.put('/user/:id', updateUser)


export { userRoutes };