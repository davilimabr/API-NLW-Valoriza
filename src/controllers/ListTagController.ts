import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";

class ListTagController {
    async handle(request: Request, response: Response) {
        const listTagService = new ListTagService();
        const listTags = await listTagService.execute();

        return response.json(listTags);
    }
}


export { ListTagController };