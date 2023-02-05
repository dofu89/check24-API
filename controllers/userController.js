import { User } from '../models/userModel.js'

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

  try {
    const user = await User.findOne({ email })
    user.password === password && res.status(200).json({ name: user.name })
  } catch (err) {
    next(err)
  }
}

//User REGISTER
export const register = async (req, res, next) => {
  const { email, password, name } = req.body

  try {
    const newUser = await User.create({ email, password, name })
    res.status(200).send('user has been registred')
  } catch (err) {
    next(err)
  }
}
