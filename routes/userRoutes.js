import express from 'express'
import {
  getUsers,
  checkForUser,
  login,
  register,
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/check', checkForUser)
router.post('/login', login)
router.post('/register', register)

export default router
