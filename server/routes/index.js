const express = require('express');

const AuthRouter = require('./authRoutes')
const router = express.Router();

router.use('/api/auth',AuthRouter);
module.exports =router;
