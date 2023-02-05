import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    requred: [true, 'Please add an email'],
  },
  password: {
    type: String,
    requred: [true, 'Please add a password'],
    minlength: 6,
  },
})

const User = mongoose.model('User', UserSchema)

export { User }
