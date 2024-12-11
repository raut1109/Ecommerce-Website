import express from "express"
import { addData, getAllData } from "../controllers/dataController.js";

const dataRoutes = express.Router();

dataRoutes.post('/data', addData);
dataRoutes.get('/data', getAllData);



// userRoutes.get('/user', getAllUser);
// userRoutes.delete('/user/:id', deleteUser)
// userRoutes.put('/user/:id', updateUser)


export { dataRoutes };



