import { Router } from 'express';
import { Create } from '../controllers/UsersController';

const usersRouter = Router();

usersRouter.post('/', Create);

export default usersRouter;