import express from 'express';
import { getAll, addTransaction } from '../controllers/transactionController.js';

const router = express.Router();

router.get('/', getAll);
router.post('/', addTransaction);

export default router;
