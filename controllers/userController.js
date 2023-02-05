import { User } from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bycript from 'bcryptjs'

//generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, 'token', { expiresIn: '1d' })
}

//Get Users
export const getUsers = async (req, res, next) => {
  const users = await User.find()
  try {
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

//Check if user exists
export const checkForUser = async (req, res, next) => {
  const { email } = req.body
  try {
    const userExists = await User.findOne({ email })
    if (userExists) {
      res.status(200).json({ user: true, email: userExists.email })
    } else {
      res.status(200).json({ user: false })
    }
  } catch (err) {
    next(err)
  }
}

//User LOGIN
export const login = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  console.log('id', user._id.valueOf())

  try {
    if (user && (await bycript.compare(password, user.password))) {
      res.status(200).json({ name: user.name, token: generateToken(user._id) })
    }
  } catch (err) {
    next(err)
  }
}

//User REGISTER
export const register = async (req, res, next) => {
  const { email, password, name } = req.body

  const salt = await bycript.genSalt(10)
  const hashedPassword = await bycript.hash(password, salt)

  try {
    const newUser = await User.create({ email, password: hashedPassword, name })
    res.status(200).send('user has been registred')
  } catch (err) {
    next(err)
  }
}

export const test = async (req, res, next) => {
  res.status(200).send('protected route')
}
