import express from 'express'
import { getHome, postHome, uploadMid } from '../controllers/home/index.js'

const router = express.Router()

router.route('/')
  .get(getHome)
  .post(uploadMid, postHome)

export default router