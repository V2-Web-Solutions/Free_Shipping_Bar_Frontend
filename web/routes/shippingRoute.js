import {
	addShipping,
	deleteShipping,
	getByIdAndDuplicate,
	getByIdShipping,
	getByShopNameShipping,
	getShipping,
	isActive,
	updateShipping,
} from '../controllers/shippingController.js';

import express from 'express';

const router = express.Router();

router.post('/addShipping', addShipping);
router.get('/getShipping', getShipping);
router.get('/getByIdShipping/:id', getByIdShipping);
router.get('/getByShopNameShipping', getByShopNameShipping);
router.delete('/deleteShipping/:id', deleteShipping);
router.put('/updateShipping/:id', updateShipping);
router.put('/getByIdAndDuplicate/:id', getByIdAndDuplicate);
router.put('/isActive/:id', isActive);

export default router;
