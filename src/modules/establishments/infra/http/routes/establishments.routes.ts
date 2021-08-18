import { Router } from 'express';
import { Create, GetWithCity, Delete } from '../controllers/EstablishmentsController';

const establishmentsRouter = Router();

establishmentsRouter.post('/', Create);
establishmentsRouter.get('/', GetWithCity);
establishmentsRouter.delete('/', Delete);

export default establishmentsRouter;