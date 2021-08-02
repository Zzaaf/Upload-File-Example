import express from 'express'
import config from './config/index.js'
import homeRouter from './routes/homeRoute.js'
import galleryRouter from './routes/galleryRoute.js'

// Init App
const app = express()

// Config
config(app)

// Routing
app.use('/', homeRouter)
app.use('/gallery', galleryRouter)

export default app