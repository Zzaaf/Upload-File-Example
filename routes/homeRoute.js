import express from 'express'
import { getHome } from '../controllers/home/index.js'

const router = express.Router()

router.route('/')
  .get(getHome)

export default router