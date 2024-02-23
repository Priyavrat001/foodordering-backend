import { TryCatch } from "../middleware/error.js";
import { Request, NextFunction, Response } from "express";
import { CreateUserRquestType } from "../types/types.js";
import { User } from "../models/user.js";


export const createUser = TryCatch(async(req:Request<{},{},CreateUserRquestType>, res:Response, next:NextFunction)=>{

    const {name, email, city, auth0Id, addressLine1, country} = req.body;

    let user = await User.findById(auth0Id)

    if(user){
        res.status(200).json({success:true, message:`Welcome ${user.name}`})
    }
    
    if(!auth0Id||!email){
        return
    }
    
    user = await User.create({
        name,
        email,
        city,
        auth0Id,
        addressLine1,
        country
    })


})