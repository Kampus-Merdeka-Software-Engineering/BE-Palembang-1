const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/addtocart', cartController.addToCart);
router.get('/getcart', cartController.getCart);
router.delete('/removecart/:id', cartController.removeCart);

module.exports = router;
