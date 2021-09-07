import { Router } from 'express';
import {
  httpCreateApplication,
  httpDeleteApplication,
  httpDeleteApplications,
  httpGetApplication,
  httpGetApplications,
  httpGetJobApplications,
  httpUpdateApplication,
} from '../controllers/application.controllers.js';
import { errorCatcher } from '../middlewares/error.js';
import { isAuthenticated } from '../middlewares/isAuthenticated..js';

const router = Router();

router
  .route('/')
  .post(errorCatcher(isAuthenticated), errorCatcher(httpCreateApplication))
  .get(errorCatcher(isAuthenticated), errorCatcher(httpGetApplications))
  .delete(errorCatcher(isAuthenticated), errorCatcher(httpDeleteApplications));
router
  .route('/:id')
  .get(errorCatcher(isAuthenticated), errorCatcher(httpGetApplication))
  .put(errorCatcher(isAuthenticated), errorCatcher(httpUpdateApplication))
  .delete(errorCatcher(isAuthenticated), errorCatcher(httpDeleteApplication));
router
  .route('/job/:jobId')
  .get(errorCatcher(isAuthenticated), errorCatcher(httpGetJobApplications));

export default router;
