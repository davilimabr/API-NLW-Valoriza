import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string
}

export function ensureAuhenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const token = authToken.split(" ")[1];

    try {
        const decode = verify(token, "590f9f25497bae2afbc9e54deb827adf") as IPayLoad;

        request.user_id = decode.sub;

        return next();

    } catch (err) {
        return response.status(401).end();
    }
}