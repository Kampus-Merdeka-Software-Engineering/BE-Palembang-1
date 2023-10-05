const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
    try {
        let products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        let products = await Product.findAll({
            where: {
                category: category
            }
        });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
