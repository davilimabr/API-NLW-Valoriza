import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
    async execute(name: string) {
        const tagsRepository = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Name invalid");
        }

        const tagAlreadyExists = await tagsRepository.findOne({ name });
        if (tagAlreadyExists) {
            throw new Error("Name already existis");
        }

        const tag = tagsRepository.create({
            name: name
        });

        await tagsRepository.save(tag);

        return tag;
    }
}

export { CreateTagService };