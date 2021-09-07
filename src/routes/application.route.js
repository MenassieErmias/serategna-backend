import { Router } from 'express';
import {
  httpCreateApplication,
  httpDeleteApplications,
  httpGetApplications,
} from '../controllers/application.controllers.js';
import { errorCatcher } from '../middlewares/error.js';
import { isAuthenticated } from '../middlewares/isAuthenticated..js';

const router = Router();

router
  .route('/')
  .post(errorCatcher(isAuthenticated), errorCatcher(httpCreateApplication))
  .get(errorCatcher(isAuthenticated), errorCatcher(httpGetApplications))
  .delete(errorCatcher(isAuthenticated), errorCatcher(httpDeleteApplications));

export default router;
