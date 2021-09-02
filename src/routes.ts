import { Router } from 'express'
import { UsersControllers } from './controllers/UsersControllers'

const routes = Router()

const usersControllers = new UsersControllers()

routes.post("/users", usersControllers.handle)
routes.get("/users", usersControllers.getAllUsers)
routes.put("/users/:id", usersControllers.atualizarUsuario)
routes.delete("/users/:id", usersControllers.deleteUser)

export { routes }