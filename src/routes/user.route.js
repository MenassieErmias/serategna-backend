import { Router } from 'express';
import {
  httpCreateUser,
  httpLoginUser,
  httpDeleteUser,
  httpDeleteUsers,
  httpGetUsers,
} from '../controllers/user.contollers.js';
import { isAdmin } from '../middlewares/elevatedRole.js';
import { errorCatcher } from '../middlewares/error.js';
const router = Router();

router
  .route('/')
  .post(errorCatcher(httpCreateUser))
  .get(httpGetUsers)
  .delete(errorCatcher(isAdmin), errorCatcher(httpDeleteUsers));
router
  .route('/:id')
  .delete(errorCatcher(isAdmin), errorCatcher(httpDeleteUser));
router.route('/login').post(errorCatcher(httpLoginUser));

export default router;
