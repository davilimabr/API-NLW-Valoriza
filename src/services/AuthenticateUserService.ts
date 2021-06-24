import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

interface IAuthenticateUserRequest {
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories)

        const user = await usersRepository.findOne({ email });
        if (!user) {
            throw new Error("Email or Password invalid.");
        }

        const passwordIsCorrect = await compare(password, user.password);
        if (!user || !passwordIsCorrect) {
            throw new Error("Email or Password invalid.");
        }

        const token = sign({ email: user.email }, "590f9f25497bae2afbc9e54deb827adf", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService };