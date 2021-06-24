import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

class CreateComplimentService {
    async execute({ user_sender, user_receiver, tag_id, message }: IComplimentRequest) {
        if (user_sender === user_receiver) {
            throw new Error("Invalid user receiver");
        }

        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);

        const userReceiver = await usersRepository.findOne(user_receiver);
        if (!userReceiver) {
            throw new Error("User receiver does not exists");
        }

        const compliment = complimentsRepository.create({ user_sender, user_receiver, tag_id, message });
        await complimentsRepository.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService };