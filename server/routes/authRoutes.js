const express = require('express');
const router = express.Router();
const loginController = require('../controllers/authController.js');


router.get('/master', loginController.getMaster);

module.exports = router;