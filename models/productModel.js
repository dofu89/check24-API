import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  ratingCount: {
    type: Number,
    required: true,
  },
  availableSum: {
    type: Number,
    required: true,
  },
  odlPrice: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  currentPrice: {
    type: String,
    required: true,
  },
  premium: {
    type: Boolean,
    required: true,
  },
  punkte: {
    type: Number,
    required: true,
  },
})

export default mongoose.model('Product', ProductSchema)
