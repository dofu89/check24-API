import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js'

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    const verified = jwt.verify(token, 'token')
    console.log('decoded', verified)
    req.user = await User.findById(verified.id)
    next()
  } catch (err) {
    next(err)
  }
}
