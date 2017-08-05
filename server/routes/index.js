import express from 'express';
import post from './post';
import food from './food';

const router = express.Router();
router.use('/post', post);
router.use('/food', food);

export default router;