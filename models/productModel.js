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
  type: {
    type: String,
    requred: true,
  },
})

const BeautyProduct = mongoose.model('BeautyProduct', ProductSchema)
const TechnoProduct = mongoose.model('TechnoProduct', ProductSchema)
const HouseholdProduct = mongoose.model('HouseholdProduct', ProductSchema)

export { BeautyProduct, TechnoProduct, HouseholdProduct }
