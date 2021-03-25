import express from 'express';
import { isLoggedIn } from '../../middlewares/isloggedin';
const router = express.Router();

import * as googleController from '../../controllers/google';

router.get('/auth/google', googleController.google);
router.get('/auth/google/callback', googleController.google_callback);
router.get('/auth/google/failed', googleController.google_failed);
router.get('/auth/google/success', isLoggedIn,  googleController.google_success);
router.get('/logout', googleController.google_logout);
router.get('/loggedout', googleController.google_loggedout);

export default router;