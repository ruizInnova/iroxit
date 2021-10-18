import { Router } from 'express';
import { getStores, getStore, deleteStore, putStore, postStore } from '../controllers/store';
const router = Router();

router.get('/', getStores);
router.get('/:id', getStore);
router.post('/', postStore);
router.put('/:id', putStore);
router.delete('/:id', deleteStore);

export default router;