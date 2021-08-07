import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
export function checkAuth(req:Request, res:Response, next:NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1] ?? "";
        const decodedToken = jwt.verify(token, 'SampleApp');
        req.userData = decodedToken?.toString() ?? "";
        next();
        return;
    }catch(error) {
        return res.status(401).send({
            message: 'Doğrulama başarısızdır.'
        });
    }
}
declare global {
    namespace Express {
      interface Request {
        userData:string;
      }
    }
}