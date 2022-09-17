import {
  BeautyProduct,
  TechnoProduct,
  HouseholdProduct,
} from '../models/productModel.js'

//////POST//////

export const createTechnoProduct = async (req, res, next) => {
  const newProduct = new TechnoProduct(req.body)
  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (err) {
    res.send(err)
  }
}

export const createBeautyProduct = async (req, res, next) => {
  const newProduct = new BeautyProduct(req.body)

  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (err) {
    res.send(err)
  }
}

export const createHouseholdProduct = async (req, res, next) => {
  const newProduct = new HouseholdProduct(req.body)

  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (err) {
    res.send(err)
  }
}

//////GET//////

//all techno
export const getTechnoProducts = async (req, res, next) => {
  const products = await TechnoProduct.find()
  try {
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
  }
}

//single techno
export const getTechnoProduct = async (req, res, next) => {
  try {
    const product = await TechnoProduct.findById(req.params.id)
    res.status(200).json(product)
  } catch (err) {
    console.log(err)
  }
}

//all beauty
export const getBeautyProducts = async (req, res, next) => {
  const products = await BeautyProduct.find()
  try {
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
  }
}

//single beauty
export const getBeautyProduct = async (req, res, next) => {
  try {
    const product = await BeautyProduct.findById(req.params.id)
    res.status(200).json(product)
  } catch (err) {
    console.log(err)
  }
}
//all beauty
export const getHouseholdProducts = async (req, res, next) => {
  const products = await HouseholdProduct.find()
  try {
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
  }
}

//single beauty
export const getHouseholdProduct = async (req, res, next) => {
  try {
    const product = await HouseholdProduct.findById(req.params.id)
    res.status(200).json(product)
  } catch (err) {
    console.log(err)
  }
}

//get all products
export const getAllProducts = async (req, res, next) => {
  const techno = await TechnoProduct.find()
  const beauty = await BeautyProduct.find()
  const haushold = await HouseholdProduct.find()
  const productsDB = techno.concat(beauty).concat(haushold)
  try {
    const allProducts = productsDB
    res.status(200).json(allProducts)
  } catch (err) {
    console.log(err)
  }
}

//get all products
export const getProduct = async (req, res, next) => {
  const techno = await TechnoProduct.find()
  const beauty = await BeautyProduct.find()
  const haushold = await HouseholdProduct.find()
  const productsDB = techno.concat(beauty).concat(haushold)

  try {
    const allProducts = productsDB
    res.status(200).json(allProducts)
  } catch (err) {
    console.log(err)
  }
}
