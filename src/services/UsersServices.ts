import { getCustomRepository } from "typeorm"
import { Users } from "../entities/Users"
import { UsersRepositories } from "../repositories/UsersRepositories"

export interface IUsersRequest {
    nome: string
}

class UsersServices {

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


    async getAllusers() {
        const usersRepositories = getCustomRepository(UsersRepositories)

        const users = await usersRepositories.find()
        
        return users
    }

    async updateUser(id: string, nome: string) {

        const usersRepositories = getCustomRepository(UsersRepositories)

        if (!id) throw new Error("Usuario Invalido!")

        const useraffected = await usersRepositories.createQueryBuilder()
            .update(Users)
            .set({ nome })
            .where("id = :id", { id }).execute()

        if(useraffected.affected === 1){
            const user = await usersRepositories.findOne(id)
            return user
        }
    }

    async deleteUser(id: string) {

        const usersRepositories = getCustomRepository(UsersRepositories)

        const userDeleted = await usersRepositories.delete(id)

        return userDeleted

    }
}

export { UsersServices }