import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserService = new ListUserService();
        const listUsers = await listUserService.execute();

        return response.json(listUsers);
    }
}


export { ListUserController };