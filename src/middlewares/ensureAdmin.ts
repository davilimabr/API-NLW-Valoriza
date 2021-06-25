import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const userRepository = getCustomRepository(UsersRepositories);
    const user = await userRepository.findOne(request.user_id);

    if (user.admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}