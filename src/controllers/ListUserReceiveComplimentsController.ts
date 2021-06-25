import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response) {
        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();
        const listCompliments = await listUserReceiveComplimentsService.execute(request.user_id);

        return response.json(listCompliments);
    }
}


export { ListUserReceiveComplimentsController };