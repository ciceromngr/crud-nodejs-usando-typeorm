import { Router } from 'express'
import { UsersControllers } from './controllers/UsersControllers'

const routes = Router()

const usersControllers = new UsersControllers()

routes.post("/users", usersControllers.handle)

export { routes }