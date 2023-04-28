import { getCurrency } from '../controllers/currencyController.js';
import express from 'express';

const router = express.Router();

router.get('/getCurrency', getCurrency);
export default router;
