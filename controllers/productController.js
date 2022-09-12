import Product from '../models/productModel.js'

export const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body)

  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (err) {
    res.send(err).json(err)
  }
}

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
  }
}
