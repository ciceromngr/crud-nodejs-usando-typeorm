import { Request, Response } from "express";
import { UsersSerives } from "../services/UsersServices";

class UsersControllers {
    async handle(request: Request, response: Response) {
        const { nome } = request.body

        const usersServices = new UsersSerives()

        const user = await usersServices.execute({ nome })

        return response.json(user)
    }
}

export { UsersControllers }