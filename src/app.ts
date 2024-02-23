import express from 'express';
import cors from "cors";
import  {connectToMongo}  from './utils/features.js';
import dotenv from "dotenv";

// importing all routes
import userRoute from "./routes/user.js"

dotenv.config();


const port = process.env.PORT;
const app = express();


connectToMongo();

app.use(express.json());
app.use(cors());

app.use("api/v1/user", userRoute)


app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
