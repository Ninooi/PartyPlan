import { Router } from 'express';
import { Create } from '../controllers/SessionsController';

const sessionsRouter = Router();

sessionsRouter.post('/', Create);

export default sessionsRouter;