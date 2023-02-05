import express from 'express'
import {
  getUsers,
  checkForUser,
  login,
  register,
  test,
} from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/check', checkForUser)
router.post('/login', login)
router.post('/register', register)
router.get('/test', protect, test)

export default router
