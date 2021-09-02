import { Request, Response } from "express";
import { UsersServices } from "../services/UsersServices";

class UsersControllers {
    async handle(request: Request, response: Response) {
        const { nome } = request.body

        const usersServices = new UsersServices()

        const user = await usersServices.execute({ nome })

        return response.json(user)
    }

    async atualizarUsuario(request: Request, response: Response) {
        const { nome } = request.body
        const { id } = request.params
        const usersServices = new UsersServices()

        const atualizado = await usersServices.updateUser(id, nome)
        
        if (!atualizado) return response.status(404).json({ messageError: `user not found!` })

        return response.json(atualizado)
    }

    async deleteUser(request: Request, response: Response) {
        const { id } = request.params

        const usersServices = new UsersServices()

        const userDeleted = await usersServices.deleteUser(id)
        
        if (userDeleted.affected === 1) {
            return response.json({ message: ` user ${id} removed` })
        }

        return response.status(404).json({ messageError: "user not found!" })
    }
}

export { UsersControllers }