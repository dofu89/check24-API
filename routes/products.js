import express from 'express'
import {
  createProduct,
  getAllProducts,
  getProduct,
} from '../controllers/productController.js'

const router = express.Router()

router.post('/', createProduct)
router.get('/find/:id', getProduct)
router.get('/', getAllProducts)

export default router
