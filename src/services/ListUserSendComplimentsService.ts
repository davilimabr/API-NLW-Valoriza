import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        const listCompliments = await complimentsRepository.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        });

        return listCompliments;
    }
}

export { ListUserSendComplimentsService };