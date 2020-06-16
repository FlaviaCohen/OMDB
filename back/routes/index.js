const express = require('express');
const router = express.Router();

const userRouter = require('./userRoutes');
const favsRouter = require('./favsRoutes');

router.use('/users', userRouter);
router.use('/favs', favsRouter);

module.exports = router; 