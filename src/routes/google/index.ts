import express from 'express';
const router = express.Router();

import * as googleController from '../../controllers/google';

router.get('/auth/google', googleController.google);
router.get('/auth/google/callback', googleController.google_callback);
router.get('/auth/google/failed', googleController.google_failed);
router.get('/auth/google/success', googleController.google_success);

export default router;