const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

// endpoint untuk menambahkan produk ke keranjang
exports.addToCart = async (req, res) => {
  try {
    const { productId, amount } = req.body;

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: 'Produk tidak ditemukan' });
    }

    const cartItem = await Cart.create({ amount });
    await product.addCart(cartItem);

    res.json({ message: 'Produk berhasil ditambahkan ke keranjang' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// endpoint untuk mendapatkan isi keranjang
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({
      include: [{ model: Product }]
    });

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// endpoint untuk menghapus produk dari keranjang
exports.removeCart = async (req, res) => {
  try {
    const cartItemId = req.params.id;

    await Cart.destroy({
      where: {
        id: cartItemId
      }
    });

    res.json({ message: 'Produk berhasil dihapus dari keranjang' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};