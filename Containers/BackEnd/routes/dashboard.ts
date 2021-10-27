import { Router } from 'express';
import { getProductDet, getProductDetShopId,  getProductShops, getTopShops} from '../controllers/dashboard';

const router = Router();

router.get('/', getTopShops);
router.get('/prod/:id', getProductShops);
router.get('/detalle/', getProductDet);
router.get('/detalle/:id', getProductDetShopId);

export default router;