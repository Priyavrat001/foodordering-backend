import express from "express";
import { createUser } from "../controller/user.js";
const app = express.Router();
// Route:--->api/v1/user/updateuser
app.put("/updateuser", createUser);
export default app;
