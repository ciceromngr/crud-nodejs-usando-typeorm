import 'reflect-metadata'
import './database'
import 'express-async-errors'
import express, { NextFunction, Request, response, Response } from 'express'
import { routes } from './routes'

const PORT = 3001
const app = express()

app.use(express.json()) // para o express reconhecer o formato json
app.use(routes)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) return res.status(404).json({ error: err.message }) 

    return response.status(500).json({ messageError: "Internal server Error!" })
})

app.listen(PORT, () => console.log('Server is Running!'))