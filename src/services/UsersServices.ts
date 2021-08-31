import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

export interface IUsersRequest {
    nome: string
}

class UsersSerives {

    async execute({ nome }: IUsersRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories)

        if (!nome) throw new Error("Inserir um Nome Válido!!")

        const nomeExiste = await usersRepositories.findOne({ nome })

        if (nomeExiste) throw new Error("Nome ja está sendo utilizado!")

        const user = usersRepositories.create({
            nome
        })

        await usersRepositories.save(user)

        return user

    }

}

export { UsersSerives }