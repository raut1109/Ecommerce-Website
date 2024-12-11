import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { userRoutes }  from "./routes/userRouter.js";
import { dataRoutes } from "./routes/dataRouter.js";



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', dataRoutes);


const PORT  = 3000;
const MONGODB_URL = "mongodb+srv://shivraj:8xmpsRxmbPpu3MqD@polling0.bctiy9u.mongodb.net/polling?retryWrites=true&w=majority"

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
});

mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Database connected successfully...");
}).catch((error)=>{
    console.log("something went wrong during database connection" + error );
})