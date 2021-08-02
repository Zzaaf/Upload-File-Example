import express from 'express'
import { getGallery } from '../controllers/gallery/index.js'

const router = express.Router()

router.route('/')
  .get(getGallery)

export default router