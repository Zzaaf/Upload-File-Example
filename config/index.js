import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

// главная конфигурация приложения
const config = (app) => {
  // use
  app.use(helmet())
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(express.static('public'))


  // set
  app.set('view engine', 'hbs')
  app.set('views', 'views')

  // run
  dotenv.config()
}

export default config