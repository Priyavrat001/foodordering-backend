import { NextFunction, Request, Response } from "express";


export type ControllerType = (
    req: Request<any>,
    res: Response,
    next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;