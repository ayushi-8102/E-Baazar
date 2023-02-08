require("dotenv").config();
const createError = require("http-errors");
const { Product } = require("../models");

class Products {
  static getAllProducts = async () => {
    const prod = await Product.find();
    return prod;
  };
  static addProduct = async (data) => {
    const product = Product.create({ ...data });

    return {
      status: true,
      message: "Product created successfully",
      data: product,
    };
  };
}

module.exports = Products;
