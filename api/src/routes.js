import { Router } from 'express';

// importacao de controllers
import MessagesController from './app/controllers/MessagesController';

const routes = new Router();

routes.post('/messages', MessagesController.store);

export default routes;
