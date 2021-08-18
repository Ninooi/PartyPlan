import { Router } from 'express';

import usersRouter from './modules/users/infra/http/routes/users.routes';
import sessionsRouter from './modules/users/infra/http/routes/sessions.routes';
import establishmentsRouter from './modules/establishments/infra/http/routes/establishments.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/establishments', establishmentsRouter);

export default routes;