import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentController {
    async handle(request: Request, response: Response) {
        const { user_receiver, tag_name, message } = request.body;

        const userRepository = getCustomRepository(UsersRepositories);
        const userReceiver = await userRepository.findOne({ email: user_receiver });

        const tagRepository = getCustomRepository(TagsRepositories);
        const tag = await tagRepository.findOne({ name: tag_name });

        const createComplimentService = new CreateComplimentService();
        const compliment = await createComplimentService.execute({
            user_sender: request.user_id,
            user_receiver: userReceiver.id,
            tag_id: tag.id,
            message
        });

        response.json(compliment);
    }
}

export { CreateComplimentController };