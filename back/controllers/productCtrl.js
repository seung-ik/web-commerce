const Products = require("../models/productModel");

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.json(products);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProducts: async (req, res) => {
    try {
      const { product_id, title, content, description, price, images, category } = req.body;
      if (!images) return res.status(400).json({ msg: "No images" });

      const product = Products.findById({ product_id });
      if (!product) return res.status(400).json({ msg: "this product already exist" });

      const newProduct = new Products({
        product_id,
        title: title.toLowerCase(),
        content,
        description,
        price,
        images,
        category,
      });

      await newProduct.save();
      res.json({ msg: "create a product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProducts: async (req, res) => {
    try {
      await Products.findOneAndDelete(req.params.id);
      res.json({ msg: "delete product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProducts: async (req, res) => {
    try {
      const { title, content, description, price, images, category } = req.body;
      if (!images) return res.status(400).json({ msg: "No images" });

      await Products.findOneAndUpdate(
        { _id: req.params.id },
        {
          product_id,
          title: title.toLowerCase(),
          content,
          description,
          price,
          images,
          category,
        }
      );
      res.json({ msg: "update Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = productCtrl;
