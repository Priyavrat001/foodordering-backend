import { NextFunction, Request, Response } from "express";


export type ControllerType = (
    req: Request<any>,
    res: Response,
    next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;

export type CreateUserRquestType = {
    name?:string;
    email:string;
    addressLine1?:string;
    city?:string;
    auth0Id:string;
    country?:string;
}