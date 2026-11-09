import { Router } from 'express';

import { requestController } from '../controllers/request.controller.js';

const router = Router();

router.get('/', requestController.getAll);
router.get('/:id', requestController.getById);
router.post('/', requestController.create);
router.patch('/:id/status', requestController.updateStatus);
router.delete('/:id', requestController.delete);

export { router as requestRouter };
