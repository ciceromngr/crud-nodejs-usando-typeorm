import 'reflect-metadata'
import './database'
import 'express-async-errors'
import express from 'express'
import { routes } from './routes'

const PORT = 3001
const app = express()

app.use(express.json()) // para o express reconhecer o formato json
app.use(routes)

app.listen(PORT, () => console.log('Server is Running!'))