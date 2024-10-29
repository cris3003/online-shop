
const { register, login, addProductCart, getProfile } = require('../../controllers/users.controller');
const { checkToken } = require('../../utils/middleware');

const router = require('express').Router();


router.get('/profile', checkToken, getProfile)
router.post('/register', register);
router.post('/login', login);
router.put('/add/:productId', checkToken, addProductCart);

module.exports = router;

