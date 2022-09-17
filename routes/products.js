import express from 'express'
import {
  createTechnoProduct,
  createBeautyProduct,
  createHouseholdProduct,
  getTechnoProducts,
  getTechnoProduct,
  getBeautyProducts,
  getBeautyProduct,
  getHouseholdProducts,
  getHouseholdProduct,
  getAllProducts,
  getProduct,
} from '../controllers/productController.js'

const router = express.Router()

router.post('/techno', createTechnoProduct)
router.post('/beauty', createBeautyProduct)
router.post('/household', createHouseholdProduct)

router.get('/techno/', getTechnoProducts)
router.get('/techno/:id', getTechnoProduct)

router.get('/beauty/', getBeautyProducts)
router.get('/beauty/:id', getBeautyProduct)

router.get('/household/', getHouseholdProducts)
router.get('/household/:id', getHouseholdProduct)

router.get('/', getAllProducts)
router.get('/find/:id', getProduct)

export default router
