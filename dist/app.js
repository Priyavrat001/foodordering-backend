import express from 'express';
import cors from "cors";
import { connectToMongo } from './utils/features.js';
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
const app = express();
connectToMongo();
app.use(express.json());
app.use(cors());
// app.get('/api/v1/product', );
app.get('/api/v1/product', (req, res, next) => {
    res.send({ message: "server is running good" });
});
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
